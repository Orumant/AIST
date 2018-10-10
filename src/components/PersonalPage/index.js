import React,{Component} from "react";
import {forceLogin} from "../../globalFunc";
import {
  Button,
  Col,
  FormControl,
  Grid,
  ListGroup,
  ListGroupItem,
  OverlayTrigger,
  Panel,
  Row,
  Tooltip
} from "react-bootstrap";
import Notifications from "react-notification-system-redux";
import DropdownList from "../DropdownList";
import './style.css'
import SelectCreatable from "../../pages/_global/select/SelectCreatable";


class Personal extends Component {
  constructor(props, context) {
    super(props, context);
    forceLogin();
    this.props.fetchGroups();
    this.props.fetchGroupsForMembers();
    this.onGroupSelected = this.onGroupSelected.bind(this);
    this.dataMembersSelected = this.dataMembersSelected.bind(this);
    this.updateGroupMembersButtonClick = this.updateGroupMembersButtonClick.bind(this);
    this.state = {
      selectedMembers: [],
      groupName: "",
      selectedGroup: null,
    };
  }


  dataMembersSelected(members) {
    this.setState({selectedMembers: members});
  }

  onGroupSelected(index) {
      this.setState({
        selectedGroup: index,
        selectedMembers: [],
      });
  }

  changeGroupName(payload) {
      this.setState({groupName: payload.value})
  }

  updateGroupMembersButtonClick() {
    const {membersTemplates, submitFormMembers} = this.props;
    let groupParameters = {};
    groupParameters['groupName'] = membersTemplates[this.state.selectedGroup].name;
    groupParameters['members'] = this.state.selectedMembers.map(t => t.value);
    submitFormMembers(groupParameters);
    this.setState({selectedGroup : null});
  }

  createGroupButtonClick() {
    const {createGroupClicked} = this.props;
    createGroupClicked(this.state);
  }

  render() {
    const {formBuilderGroups, membersTemplates,selectedGroups} = this.props;
    const setTooltip = (id, text) => (
      <Tooltip id={id.toString()}>{text}</Tooltip>
    );
    const groups = selectedGroups.map(name => {
      return {label: name, value: name};
    });
    const groupsList = () => (groups.map((group) =>
      <ListGroupItem
      >
        {group.value}
        &nbsp;
        &nbsp;
      </ListGroupItem>));
    return (
      <div style={{width: '100%'}}>
        <Grid>
          <Panel header={"Создание группы"} style={{width: '100%'}}>
            <Row>
              <Col sm={6}>
                <FormControl className="form-control"
                             type="text"
                             value={this.state.groupName}
                             onChange={e => this.changeGroupName({value: e.target.value})}
                             label="CreateGroup"
                             placeholder="Введите название новой группы"/>
              </Col>
              <Col md={1}>
                <Button
                  className="btn btn-default btn-sm"
                  onClick={() => this.createGroupButtonClick()}
                >Создать Группу</Button>
              </Col>
            </Row>
          </Panel>
        </Grid>
        <Grid>
          <Panel header={"Добавление пользователей в группы"} style={{width: '100%'}}>
            <Row>
              <Col md={3}>
                <DropdownList
                  id={'launcherDropdown'}
                  options={formBuilderGroups}
                  tooltip={setTooltip('groupSelect', 'Выберите группу из выпадающего списка')}
                  onSelect={this.onGroupSelected}
                  selectedIndex={this.state.selectedGroup}
                  selLabel={this.state.selectedGroup !== null ? formBuilderGroups[this.state.selectedGroup].name : 'Выберите...'}
                />
              </Col>
              <Col md={6}>
                {this.state.selectedGroup !== null ?
                  <OverlayTrigger
                    placement="top"
                    overlay={setTooltip('members', 'Задайте шаблон данных')}
                  >
                    <div>
                      <SelectCreatable
                        isMulti={true}
                        options={this.state.selectedGroup !== null ? membersTemplates[this.state.selectedGroup].members : []}
                        onChange={this.dataMembersSelected}
                        value={this.state.selectedMembers}
                        placeholder="Выберите необходимых пользователей"
                        noResultsText={'Результаты не найдены'}
                      />
                    </div>
                  </OverlayTrigger>
                  : null}
              </Col>
              <Col md={1}>
                {this.state.selectedGroup !== null ?
                  <Button
                    className="btn btn-default btn-sm"
                    onClick={() => this.updateGroupMembersButtonClick()}
                  >Добавить в группу </Button>
                  : null}
              </Col>
            </Row>
          </Panel>
        </Grid>
        <Grid>
          <Panel header={"Список групп в которые входит пользователь"} style={{width: '100%'}}>
            <Row>
              <Col sm={3}/>
              <Col sm={6}>
                <ListGroup className ="listgroup">
                  {groupsList()}
                </ListGroup>
              </Col>
            </Row>
          </Panel>
        </Grid>
        <Notifications notifications={this.props.notifications}/>
      </div>
    )
  }
}

export default Personal;
