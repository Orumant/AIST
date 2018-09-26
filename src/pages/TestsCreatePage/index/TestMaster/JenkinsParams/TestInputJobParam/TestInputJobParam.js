import React from 'react';
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

class TestInputJobParam extends React.Component {

  render() {
    const {value, onChange, isError, type, help} = this.props;

    return (
      <FormControl fullWidth error={isError}
      >
        <Input
          type={type}
          value={value}
          onChange={onChange}
        />
        <FormHelperText>{help}</FormHelperText>
      </FormControl>
    )
  }
}

export default TestInputJobParam;
