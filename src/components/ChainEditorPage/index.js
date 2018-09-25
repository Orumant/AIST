import React from 'react'
import ChainDisplay from '../../containers/ChainDisplay'
import ChainList from "../../containers/ChainList"
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Col,
  FormControl,
  FormGroup,
  InputGroup,
  Modal,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap"
import TestsList from "../../containers/TestsList"
import Notifications from 'react-notification-system-redux'
import './style.css'
import Toolbar from "../toolbar"
import ToolbarEdit from "../toolbarEdit"
import {createConfirmation} from "react-confirm"
import ConfirmationDialog from "../ConfirmationDialog"
import SearchBar from "../SearchBar"
import NotifyUser from "../NotifyUser/NotifyUser"
import Select from 'react-select'
import {forceLogin} from '../../globalFunc';
import SelectCreatable from "../../pages/_global/select/SelectCreatable";

class ChainEditor extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props.fetchGroupsForMembers();
    this.props.fetchBuilderChains();
    this.handleGroupChange = this.handleGroupChange.bind(this);
    this.props.fetchChainTemplates();
    this.props.getAllDataTemplates();
    this.checkAvailableStand = this.checkAvailableStand.bind(this);

    this.state = {
      groups: [],
      selectedFilter: [],
      filters: {
        tags: [],
        marker: null,
        stands: null,
      },
      isAvailableStand: true,
    };
  }

  handleSearchTagChainCreation = (tags) => {
    if (tags.length > 0) {
      this.setState({
        filters: {
          ...this.state.filters,
          tags,
        }
      });
    } else {
      this.setState({
        filters: {
          ...this.state.filters,
          tags: [],
        }
      });
    }
  };

  handleMarkerFilterInput = (filterOpts) => {
    if (filterOpts !== null) {
      this.setState({
        filters: {
          ...this.state.filters,
          marker: filterOpts,
        }
      });
    } else {
      this.setState({
        filters: {
          ...this.state.filters,
          marker: null,
        }
      });
    }
  };

  handleApplyFiltersBtn = () => {
    if (this.state.filters.tags.length > 0) {
      let formattedTags = {tag_names: this.state.filters.tags.map(t => t.label)};
      this.props.filterTestsByTags(formattedTags, this.state.filters);
    } else {
      if (this.state.filters.marker !== null) {
        this.props.applyTestsFilters(this.state.filters);
      } else {
        this.props.clearTestFilter();
      }
    }
  };

  handleGroupChange(groups) {
    this.setState({groups});
    this.props.addGroupToChain(groups);
  }

  componentWillMount() {
    forceLogin();
  }

  clearSearchInputs = (filter) => {
    this.props.clearTestFilter();
    this.setState({
      selectedFilter: filter,
      filters: {
        tags: [],
        marker: null,
      }
    });
  };

  renderSearches = () => {
    const {onChainSelected} = this.props;
    const searchOpt = this.props.chainNames.map((test, index) => {
      return {label: test, value: index}
    });
    const searchMarker = this.props.chainMarkers.map((test, index) => {
      return {label: test, value: index}
    });

    const searchBarSwitcher = () => {
      let searches = [];
      let filters = [...this.state.selectedFilter];
      let applyFiltersBtn = this.state.selectedFilter.length > 0 ? (
        <Row>
          <Button className={'pull-right'} style={{position: 'relative', marginRight: '14px', marginTop: '5px'}}
                  onClick={this.handleApplyFiltersBtn}>Применить</Button>
          <div className="clearfix"/>
        </Row>
      ) : null;
      if (filters.length > 0) {
        while (filters.length > 0) {
          switch (filters.shift()) {
            case 'tags': {
              searches.push(
                <Select.Creatable
                  multi
                  value={this.state.filters.tags}
                  placeholder={'Фильтрация цепочки по тегам...'}
                  menuStyle={{display: 'none'}}
                  arrowRenderer={null}
                  options={[]}
                  shouldKeyDownEventCreateNewOption={key => key.keyCode = !188}
                  promptTextCreator={name => name}
                  onChange={this.handleSearchTagChainCreation}
                  noResultsText={'Результаты не найдены'}
                />
              );
              break;
            }

            case 'marker': {
              searches.push(
                <Select
                  className='test-filter'
                  options={searchMarker}
                  placeholder={'Фильтрация цепочки по маркеру...'}
                  onChange={this.handleMarkerFilterInput}
                  value={this.state.filters.marker}
                  noResultsText={'Результаты не найдены'}
                />
              );
              break;
            }


            default:
              break;
          }

        }
      }
      searches.push(applyFiltersBtn);
      return searches;
    };

    return [
      <SearchBar options={searchOpt} placeholder={'Поиск цепочки по названию...'}
                 onOptionClick={onChainSelected}/>,
      <InputGroup style={{marginBottom: '5px', marginTop: '5px'}}>
        <InputGroup.Addon>Фильтры:</InputGroup.Addon>
        <ButtonToolbar>
          <ButtonGroup>
            <ToggleButtonGroup type='checkbox' name='searchesSwitcher' value={this.state.selectedFilter}
                               onChange={searchType => this.clearSearchInputs(searchType)}>
              <ToggleButton style={{borderRadius: '0'}} value={'tags'}>Тегам</ToggleButton>
              <ToggleButton value={'marker'}>Маркеру</ToggleButton>
            </ToggleButtonGroup>
            {this.state.selectedFilter.length > 0
              ? <Button bsStyle='danger'
                        onClick={() => this.clearSearchInputs([])}>Сброс</Button>
              : null}
          </ButtonGroup>
        </ButtonToolbar>
      </InputGroup>,

      searchBarSwitcher(),
    ];
  };

  checkAvailableStand(isAvailable) {
    isAvailable ? this.setState({isAvailableStand: true}) : this.setState({isAvailableStand: false})
  }

  submitChainTemplate(chainTemplate) {
    const message = 'У выбранных тестов нет совпадающих стендов, на которых они могут быть запущены';
    this.state.isAvailableStand ? this.props.updateChainTemplate(chainTemplate) : alert(message)
  }

  render() {
    const {
      chainTemplate, chainTemplateNameChanged, deleteChainTemplate,
      addChainTemplate, updateChainTemplate, notifications,
      chainTemplateMarkerChanged, chainSelected, chainName,
      duplicate, owner, dataTemplatesNames, selectedGroups
    } = this.props;

    const confirm = createConfirmation(ConfirmationDialog, 0);
    const notify = createConfirmation(NotifyUser, 0);
    const deleteChain = () => {
      if (chainTemplate.owner === owner) {
        confirm({confirmation: `Do you really want to delete ${chainTemplate.name}?`}).then(
          () => deleteChainTemplate(chainTemplate),
          () => {
          })
      }
      else {
        notify({confirmation: `You can't delete ${chainTemplate.name}, because ${chainTemplate.name} created by another user!`}).then(
          () => {
          })
      }
    };
    const options = dataTemplatesNames.map((name) => {
      return {label: name, value: name};
    });
    const groups = selectedGroups.map((name, index) => {
      return {label: name, value: index};
    });
    const chainParamsInput = [
      <Row>
        <Col md={12}>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Название</InputGroup.Addon>
              <FormControl
                type="text"
                value={chainTemplate.name}
                placeholder="Название цепочки"
                onChange={e => chainTemplateNameChanged(e.target.value)}/>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>,
      <Row>
        <Col md={12}>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Маркер</InputGroup.Addon>
              <FormControl
                type="text"
                value={chainTemplate.marker}
                placeholder="Маркер"
                onChange={e => chainTemplateMarkerChanged(e.target.value)}/>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>,
      <Row>
        <Col md={12}>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Шаблоны</InputGroup.Addon>
              <SelectCreatable
                isMulti={true}
                options={options}
                onChange={dt => this.props.addDTToChain(dt)}
                value={chainTemplate.templates}
                placeholder="Выберите"
                id={"balla2"}
                shouldKeyDownEventCreateNewOption={key => key.keyCode = !188}
                promptTextCreator={name => name}
                noResultsText={'Результаты не найдены'}
              />
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>,
      <Row>
        <Col md={12}>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Группы</InputGroup.Addon>
              <SelectCreatable
                isMulti={true}
                options={groups}
                onChange = {this.handleGroupChange}
                value = {chainTemplate.groups}
                placeholder="Выберите"
                id={"balla"}
                shouldKeyDownEventCreateNewOption={key => key.keyCode = !188}
                promptTextCreator={name => name}
                noResultsText={'Результаты не найдены'}
              />
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    ];
    const searchOpt = this.props.chainNames.map((test, index) => {
      return {label: test, value: index}
    });
    const searchMarker = this.props.chainMarkers.map((test, index) => {
      return {label: test, value: index}
    });
    return [
      <div className='chain-editor-main'>
        <Row>
          <Col md={4}>
            <Toolbar
              additionalElement={this.renderSearches()}
            />
            <ChainList/>
          </Col>
          <Col md={5}>
            <Row>
              <Col md={12}>
                <Toolbar
                  onNewEntryAdded={() => addChainTemplate(owner)}
                  onDuplicate={() => duplicate()}
                  duplicateDisabled={this.props.chainSelected === null}
                  additionalElement={this.props.chainSelected !== null ? chainParamsInput : null}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <ToolbarEdit
                  onSubmit={() => this.submitChainTemplate({name: chainName, value: chainTemplate,})}
                  chainName={chainName}
                  chainTemplate={chainTemplate}
                  style={{
                    backgroundColor: '#EEE',
                    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                    border: '1px solid #CCC',
                    borderRadius: 3,
                  }}
                  submitDisabled={!(chainTemplate.modified || chainTemplate.new)}
                  link={'#/formbuilder/' + chainSelected}
                  setVisible={this.props.chainSelected !== null ? 'visible' : 'hidden'}
                  redirDisabled={false}
                />
              </Col>
            </Row>
            <div style={{height: '10px'}}/>
            <Row>
              <ChainDisplay chainTemplate={chainTemplate}
                            checkStands={this.checkAvailableStand}/>
            </Row>
          </Col>
          <Col md={3}>
            <TestsList/>
          </Col>
        </Row>
        <Notifications notifications={notifications}/>
      </div>
    ]
  }
}

export default ChainEditor
