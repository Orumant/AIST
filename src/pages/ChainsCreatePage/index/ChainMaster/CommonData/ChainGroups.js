import React from 'react';
import {arrayToOptions, filterPropertyFromObjects} from "../../../../../utils/filters/index";
import SelectSimple from "../../../../_global/select/SelectSimple";

class ChainGroups extends React.Component {

  render() {
    const {groups, groupsAll, onChange} = this.props;
    const groupList = arrayToOptions(filterPropertyFromObjects(groupsAll, 'name'));

    return (
      <SelectSimple
        key="chain-group-select"
        isMulti
        options={groupList}
        onChange={onChange}
        value={groups}
        helpText={"Цепочка будет доступна выбранным группам"}
      />
    )
  }
}

export default ChainGroups;
