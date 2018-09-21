import React from 'react'
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Glyphicon,
  Grid,
  InputGroup,
  Label,
  ListGroupItem,
  Panel,
  Row,
} from "react-bootstrap"
import Notifications from 'react-notification-system-redux';
import SearchBar from "../SearchBar";
import {forceLogin} from '../../globalFunc';
import './style.css';
import Toolbar from "../toolbar";

class DataTemplatesBuilderPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.props.fetchDataTemplates();
    forceLogin();
  }

  renderSearch = () => {
    const {dataTemplatesNames,onTemplateSelected } = this.props;

    const searchOpt = dataTemplatesNames.map((dt, idx) => {
      return {label: dt, value: idx};
    });

    return [
      <SearchBar options={searchOpt} placeholder={'Поиск ...'}
                 onOptionClick={onTemplateSelected}/>
    ];
  };

  renderTemplateBulder = () => {
    const {
      dataTemplates,
      selectedTemplateIndex,
      onDataTemplatesInputChange,
      templateNameChanged,
      addNewParam,
      dataTemplatesNames,
      submitTemplate
    } = this.props;

    const searchOpt = dataTemplatesNames.map((dt, idx) => {
      return {label: dt, value: idx};
    });

    return (
      <Form>
        <ListGroupItem bsStyle="success" style={{maxHeight: '800px', overflow: 'auto'}}>
          <FormGroup>
            <Panel header={'Параметры шаблона:'}>
              <Row>
                <Col md={12}>
                  <InputGroup>
                    <InputGroup.Addon>Название</InputGroup.Addon>
                    <FormControl value={dataTemplates[selectedTemplateIndex].name}
                                 onChange={(event) => templateNameChanged(event.target.value)}
                                 type="text"/>
                  </InputGroup>
                </Col>
              </Row>
              <div className='spacer'/>
              {
                dataTemplates[selectedTemplateIndex].data.map((entry, index) => [
                  <Row>
                    <Col md={6}>
                      <InputGroup>
                        <InputGroup.Addon>Ключ</InputGroup.Addon>
                        <FormControl value={entry.key}
                                     onChange={(val) => onDataTemplatesInputChange({
                                       name: 'key',
                                       value: val.target.value,
                                       index
                                     })}
                                     type="text"/>
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <InputGroup>
                        <InputGroup.Addon>Значение</InputGroup.Addon>
                        <FormControl value={entry.value}
                                     onChange={(val) => onDataTemplatesInputChange({
                                       name: 'value',
                                       value: val.target.value,
                                       index
                                     })}
                                     type="text"/>
                      </InputGroup>
                    </Col>
                  </Row>,
                  <div key={index} className='spacer-xs'/>
                ])
              }
              <Button
                bsStyle="primary"
                onClick={() => addNewParam()}
              >
                <Glyphicon glyph='glyphicon glyphicon-plus'/> Добавить новый параметр...
              </Button>
            </Panel>
          </FormGroup>
        </ListGroupItem>
        <div className='spacer'/>
        <Button
          bsStyle="success"
          bsSize="large"
          className="pull-right"
          disabled={!(selectedTemplateIndex !== null
            && (dataTemplates[selectedTemplateIndex].modified
              || dataTemplates[selectedTemplateIndex].new))}
          onClick={() => {
            submitTemplate({
              value: dataTemplates[selectedTemplateIndex],
              name: dataTemplatesNames[selectedTemplateIndex],
            })
          }}
        >
          <Glyphicon glyph='glyphicon glyphicon-floppy-disk'/>
          Сохранить изменения
        </Button>
      </Form>
    )
  };

  renderTemplatesList() {
    const {dataTemplatesNames, dataTemplates, selectedTemplateIndex, onTemplateSelected} = this.props;
    return (dataTemplatesNames.map((template, index) =>
      <ListGroupItem
        onClick={() => onTemplateSelected(index)}
        href={'/#/datatemplates/' + template}
        active={index === selectedTemplateIndex}
        key={index}
      >
        {template}
        &nbsp;
        &nbsp;
        {dataTemplates[index].modified && <Label bsStyle="warning">Изменен</Label>}
        {dataTemplates[index].new && <Label bsStyle="primary">Новый</Label>}
      </ListGroupItem>
    ));
  }

  render() {
    const {addNewTemplate} = this.props;
    return (
      <div>
          <Grid fluid={true} >
            <Row key={'bla'}>
              <Col md={3}>
                <Toolbar
                  onNewEntryAdded = {() => addNewTemplate()}
                  additionalElement = {this.renderSearch()}
                />
                <Row style={{marginLeft: 0, marginRight: 0}}>
                  {this.renderTemplatesList()}
                </Row>
              </Col>
              <Col md={9}>
                {this.props.selectedTemplateIndex !== null && this.renderTemplateBulder()}
              </Col>
            </Row>
          </Grid>
        <Notifications notifications={this.props.notifications}/>
      </div>
    )
  }
}

export default DataTemplatesBuilderPage
