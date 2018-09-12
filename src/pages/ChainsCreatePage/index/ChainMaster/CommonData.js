import React from 'react';
import {
  arrayToOptions, filterPropertyFromObjects, getOptionByLabel,
  optionsToArray
} from "../../../../utils/filters/index";
import PageNavigation from "./PageNavigation";
import ChainName from "./CommonData/ChainName";
import ChainMarker from "./CommonData/ChainMarker";
import ChainGroups from "./CommonData/ChainGroups";


class CommonData extends React.Component {

  state = {
    name: '',
    marker: '',
    groups: [],
    isError: false,
  };

  changeInput = (prop, val) => {
    this.setState({[prop]: val})
  };

  getChainData = () => {
    const {name, marker, groups} = this.state;
    return {
      name: name ? name : null,
      marker: marker ? marker.label : null,
      groups: optionsToArray(groups)
    }
  };

  componentDidMount() {
    this.updateData();
  };

  componentDidUpdate() {
    const {data, dataUpdated, needUpdate} = this.props;
    if (needUpdate && data.name) {
     this.updateData();
      dataUpdated();
    }
  };

  updateData = () => {
    const {data, templatesAll, groupsAll} = this.props;
    const {name, marker, groups} = data;
    const markerList = arrayToOptions(filterPropertyFromObjects(templatesAll, 'marker'));
    const groupList = arrayToOptions(filterPropertyFromObjects(groupsAll, 'name'));
    const initialState = {
      name: name ? name : '',
      marker: marker ? getOptionByLabel(marker, markerList) || {label: marker, val: markerList.length + 1} : '',
      groups: groups ? groups.map(group => {
        const option = getOptionByLabel(group, groupList);
        return option ? option : {label: group, value: group}
      }) : [],
    };
    this.setState(initialState);
  };

  onNext = (data) => {
    const {handleNext} = this.props;
    if (this.state.name.length === 0) {
      this.setState({isError: true})
    }
    else {
      this.setState({isError: false});
      handleNext(data)
    }
  };

  render() {
    const {name, marker, groups, isError} = this.state;
    const {templatesAll, groupsAll, handleNext, ...handleNavigation} = this.props;
    const item = (label, form) => <div className="input-item-form">{label}{form}</div>;

    return [
      <div key="commonData">
        {item("Название*", <ChainName key="chain-name-field"
                                      value={name}
                                      onChange={e => this.changeInput("name", e.target.value)}
                                      isError={isError}/>)}
        {item("Маркер", <ChainMarker key="chain-marker-field"
                                     marker={marker}
                                     templatesAll={templatesAll}
                                     onChange={option => this.changeInput("marker", option)}/>)}

        {item("Группы", <ChainGroups key="chain-groups-field"
                                     groups={groups}
                                     groupsAll={groupsAll}
                                     onChange={option => this.changeInput("groups", option)}
        />)}
      </div>,
      <PageNavigation key="navigation-common-data" chain_data={this.getChainData()}
                      handleNext={this.onNext} {...handleNavigation}/>
    ]
  }
}

export default CommonData;
