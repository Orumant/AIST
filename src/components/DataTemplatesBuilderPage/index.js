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
  Modal,
} from "react-bootstrap"
import Notifications from 'react-notification-system-redux';
import SearchBar from "../SearchBar";
import {forceLogin} from '../../globalFunc';
import './style.css';

class DataTemplatesBuilderPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount(){
    forceLogin();
  }

  componentDidMount() {
    this.props.fetchDataTemplates();
  }

  renderTemplateBulder = () => {
    const {
      dataTemplates,
      selectedTemplateIndex,
      onDataTemplatesInputChange,
      templateNameChanged,
      addNewParam,
    } = this.props;

    return (
      <Form>
        <ListGroupItem bsStyle="success" style={{maxHeight: '800px', overflow: 'auto'}}>
          <FormGroup>
            <Panel header={'Шаблон:'}>
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
      </Form>
    )
  };

  renderTemplatesList() {
    const {dataTemplatesNames, dataTemplates, selectedTemplateIndex, onTemplateSelected} = this.props;
    dataTemplatesNames.map((template, index) => {
      if (this.props.match.params.datatemplatesName === template) {
        onTemplateSelected(index);
      }

    });
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
    const {addNewTemplate, dataTemplates, selectedTemplateIndex, submitTemplate, dataTemplatesNames, onTemplateSelected} = this.props;
    const submit = (
      [
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
          Отправить
        </Button>,
        <div className="clearfix"/>
      ]
    );
    const searchOpt = dataTemplatesNames.map((dt, idx) => {
      return {label: dt, value: idx};
    });
    return (
      <div>
        <Panel bsStyle='primary' header={submit} className={'data-templates-builder-main'}>
          <Grid fluid={true} >
            <Row key={'bla'}>
              <Col md={3}>
                <Row>
                  <SearchBar options={searchOpt} onOptionClick={onTemplateSelected} placeholder={'Поиск...'}/>
                </Row>
                <Row>
                  <Button
                    bsStyle="primary"
                    className='btn-block'
                    onClick={() => addNewTemplate()}
                    key={'addNewTemplate'}
                  >
                    <Glyphicon glyph='glyphicon glyphicon-plus'/> Добавить новый шаблон...
                  </Button>
                  {this.renderTemplatesList()}
                </Row>
              </Col>
              <Col md={9}>
                {this.props.selectedTemplateIndex !== null && this.renderTemplateBulder()}
              </Col>
            </Row>
          </Grid>
        </Panel>
        <Notifications notifications={this.props.notifications}/>
      </div>
    )
  }
}

export default DataTemplatesBuilderPage
