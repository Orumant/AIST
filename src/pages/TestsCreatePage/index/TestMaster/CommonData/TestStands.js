import React from 'react';
import {arrayToOptions, filterPropertyFromObjects} from "../../../../../utils/filters/index";
import SelectSimple from "../../../../_global/select/SelectSimple";

class TestStands extends React.Component {

  render() {
    const {stands, standsAll, onChange} = this.props;
    const standList = standsAll? arrayToOptions(filterPropertyFromObjects(standsAll, 'code')) : [];

    return (
      <SelectSimple
        key={'select-stand-test'}
        isMulti
        options={standList}
        onChange={onChange}
        value={stands}
        helpText={'Тесту будут добавлены выбранные контуры'}
      />
    )
  }
}

export default TestStands;
