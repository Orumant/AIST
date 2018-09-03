import React from 'react'
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

class RequiredTextField extends React.Component {

  render() {
    const {label, value, onChange, isChecking,  fullWidth} = this.props;
    const isError = isChecking && value.length === 0;

    return (
      <FormControl required
                   fullWidth={fullWidth}
                   error={isError}
      >
        <InputLabel>{label}</InputLabel>
        <Input value={value}
               onChange={onChange}/>
        <FormHelperText>{isError ? "Поле не может быть пустым" : null}</FormHelperText>
      </FormControl>
    )
  }
}

export default RequiredTextField;
