import React from 'react';
import {arrayToOptions, filterPropertyFromObjects} from "../../../../../utils/filters/index";
import SelectSimple from "../../../../_global/select/SelectSimple";
import FormControl from "@material-ui/core/FormControl";

class TestStands extends React.Component {

  render() {
    const {stands, standsAll, onChange, isError} = this.props;
    const standList = standsAll? arrayToOptions(filterPropertyFromObjects(standsAll, 'code')) : [];

    return (
      <FormControl fullWidth
                   key={'input-test-stands-form-control'}
                   error={isError}
      >
        <SelectSimple
          key={'select-stand-test'}
          isMulti
          options={standList}
          onChange={onChange}
          value={stands}
          helpText={'Выберите хотя бы один контур'}
        />
      </FormControl>
    )
  }
}

export default TestStands;
