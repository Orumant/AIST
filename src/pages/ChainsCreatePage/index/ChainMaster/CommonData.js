import React from 'react'
import PageContent from '../../../_global/PageContent'
import {FormControl, InputGroup} from "react-bootstrap";
import FilterForm from "../../../_global/filters/base/FilterForm";
import Select from 'react-select';
import {arrayToOptions, filterPropertyFromObjects} from "../../../../utils/filters/index";

class CommonData extends React.Component {

  state = {
    name: null,
    marker: null,
    template: [],
    group: [],
  };

  changeInput = (prop, val) => {
    this.setState({[prop]: val})
  };

  render() {
    const {name, marker, template, group} = this.state;
    const {templates, groups} = this.props;
    const item = (label, form) => <div className="input-item-form">{label}{form}</div>;
    const templateList = arrayToOptions(filterPropertyFromObjects(templates, 'name'));
    const groupList = arrayToOptions(filterPropertyFromObjects(groups, 'name'));

    return [
      <div>
        {item("Название", <FormControl
          type="text"
          value={name}
          placeholder="Название цепочки"
          onChange={e => this.changeInput("name", e.target.value)}/> )}
        {item("Маркер", <FormControl
          type="text"
          value={marker}
          placeholder="Маркер"
          onChange={e => this.changeInput("marker", e.target.value)}/> )}
        {item("Шаблоны",  <Select
            multi
            options={templateList}
            placeholder={"Список шаблонов"}
            onChange={option => this.changeInput("template", option)}
            value={template}
        /> )}
        {item("Группы",  <Select
          multi
          options={groupList}
          placeholder={"Список групп"}
          onChange={option => this.changeInput("group", option)}
          value={group}
        /> )}
      </div>,
    ]
  }
}

export default CommonData;
