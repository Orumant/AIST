import React from 'react';
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

class TestName extends React.Component {

  render() {
    const {value, onChange, isError} = this.props;

    return (
      <FormControl fullWidth
                   error={isError}
      >
        <Input value={value}
               onChange={onChange}
        />
        <FormHelperText>Название не может быть пустым</FormHelperText>
      </FormControl>
    )
  }
}

export default TestName;
