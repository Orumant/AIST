import React from 'react';
import {FormControl, InputGroup} from "react-bootstrap";
import Select from 'react-select';
import {
  arrayToOptions, filterPropertyFromObjects, getOptionByLabel,
  optionsToArray
} from "../../../../utils/filters/index";
import PageNavigation from "./PageNavigation";

class CommonData extends React.Component {

  state = {
    name: '',
    marker: '',
    groups: [],
  };

  changeInput = (prop, val) => {
    this.setState({[prop]: val})
  };

  getChainData = () => {
    const {name, marker, groups} = this.state;
    return {
      name: name? name : null,
      marker: marker? marker.label : null,
      groups: optionsToArray(groups)
    }
  };

  componentDidMount() {
    const {data, templatesAll, groupsAll} = this.props;
    const {name, marker, groups} = data;
    const markerList = arrayToOptions(filterPropertyFromObjects(templatesAll, 'marker'));
    const groupList = arrayToOptions(filterPropertyFromObjects(groupsAll, 'name'));
    this.setState({
      name: name? name : '',
      marker: marker? getOptionByLabel(marker, markerList) || {label: marker, val: markerList.length + 1} : '',
      groups: groups? groups.map(group => getOptionByLabel(group, groupList)) : [],
    })
  }

  render() {
    const {name, marker, groups} = this.state;
    const {templatesAll, groupsAll, ...handleNavigation} = this.props;
    const item = (label, form) => <div className="input-item-form">{label}{form}</div>;
    const markerList = arrayToOptions(filterPropertyFromObjects(templatesAll, 'marker'));
    const groupList = arrayToOptions(filterPropertyFromObjects(groupsAll, 'name'));

    return [
      <div key="commonData">
        {item("Название", <FormControl
          type="text"
          value={name}
          placeholder="Название цепочки"
          onChange={e => this.changeInput("name", e.target.value)}/> )}
        {item("Маркер", <Select.Creatable
            options={markerList}
            placeholder={"Выберите маркер или создайте свой"}
            onChange={option => this.changeInput("marker", option)}
            promptTextCreator={(label) => 'Создать ' + label}
            value={marker}
          />
         )}
        {item("Группы", <Select
          multi
          options={groupList}
          placeholder={"Цепочка будет доступна выбранным группам"}
          onChange={option => this.changeInput("groups", option)}
          value={groups}
        /> )}
      </div>,
      <PageNavigation key="navigation-common-data" chain_data={this.getChainData()} {...handleNavigation}/>
    ]
  }
}

export default CommonData;
