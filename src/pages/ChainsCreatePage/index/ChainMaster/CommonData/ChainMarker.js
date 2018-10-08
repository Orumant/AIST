import React from 'react';
import {arrayToOptions, filterPropertyFromObjects} from "../../../../../utils/filters/index";
import SelectCreatable from "../../../../_global/select/SelectCreatable";

class ChainName extends React.Component {

  render() {
    const {marker, chainsAll, onChange} = this.props;
    const markerList = arrayToOptions(filterPropertyFromObjects(chainsAll, 'marker'));

    return (
      <SelectCreatable
        key="chain-marker-select"
        options={markerList}
        helpText={"Выберите маркер или создайте свой"}
        onChange={onChange}
        value={marker}
      />
    )
  }
}

export default ChainName;
