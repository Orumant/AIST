import React from 'react';
import {FormControl, InputGroup} from "react-bootstrap";
import Select from 'react-select';
import {arrayToOptions, filterPropertyFromObjects, optionsToArray} from "../../../../utils/filters/index";
import PageNavigation from "./PageNavigation";

class CommonData extends React.Component {

  state = {
    name: null,
    marker: null,
    templates: [],
    groups: [],
  };

  changeInput = (prop, val) => {
    this.setState({[prop]: val})
  };

  getChainData = () => {
    const {name, marker, templates, groups} = this.state;
    return {
      name,
      marker,
      templates: optionsToArray(templates),
      groups: optionsToArray(groups)
    }
  };

  render() {
    const {name, marker, templates, groups} = this.state;
    const {templatesAll, groupsAll, ...handleNavigation} = this.props;
    const item = (label, form) => <div className="input-item-form">{label}{form}</div>;
    const templateList = arrayToOptions(filterPropertyFromObjects(templatesAll, 'name'));
    const groupList = arrayToOptions(filterPropertyFromObjects(groupsAll, 'name'));

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
            onChange={option => this.changeInput("templates", option)}
            value={templates}
        /> )}
        {item("Группы",  <Select
          multi
          options={groupList}
          placeholder={"Список групп"}
          onChange={option => this.changeInput("groups", option)}
          value={groups}
        /> )}
      </div>,
      <PageNavigation chain_data={this.getChainData()} {...handleNavigation}/>
    ]
  }
}

export default CommonData;
