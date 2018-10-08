import React from 'react';
import {arrayToOptions, filterPropertyFromObjects} from "../../../../../utils/filters/index";
import SelectSimple from "../../../../_global/select/SelectSimple";

class ChainTemplates extends React.Component {

  render() {
    const {templates, templatesAll, onChange} = this.props;
    const templateList = arrayToOptions(filterPropertyFromObjects(templatesAll, 'name'));

    return (
      <SelectSimple
        key="chain-template-select"
        isMulti
        options={templateList}
        onChange={onChange}
        value={templates}
        helpText={"Выбранные шаблоны будут доступны на этапе запуска цепочки"}
      />
    )
  }
}

export default ChainTemplates;
