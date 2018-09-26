import React from 'react';
import SelectCreatable from "../../../../_global/select/SelectCreatable";

class TestAs extends React.Component {

  render() {
    const {tags, onChange, helpText} = this.props;
    return (
      <SelectCreatable
        isMulti
        options={[]}
        helpText={helpText}
        onChange={onChange}
        value={tags}
      />
    )
  }
}

export default TestAs;
