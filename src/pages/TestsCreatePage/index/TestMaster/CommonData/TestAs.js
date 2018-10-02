import React from 'react';
import {arrayToOptions, filterPropertyFromObjects} from "../../../../../utils/filters/index";
import SelectSimple from "../../../../_global/select/SelectSimple";
import FormControl from "@material-ui/core/FormControl";

class TestAs extends React.Component {

  render() {
    const {as, asAll, onChange, isError} = this.props;
    const asList = arrayToOptions(filterPropertyFromObjects(asAll, 'code'));

    return (
      <FormControl fullWidth
                   error={isError}
      >
      <SelectSimple
        key={'select-as-test'}
        options={asList}
        helpText={'Выберите АС для теста. Параметр обязателен'}
        onChange={onChange}
        value={as}
      />
      </FormControl>
    )
  }
}

export default TestAs;
