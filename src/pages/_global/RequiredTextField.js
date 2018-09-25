import React from 'react'
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

class RequiredTextField extends React.Component {

  render() {
    const {label, value, onChange, onBlur, fullWidth, errorMessage} = this.props;
    const isError = Boolean(errorMessage);

    return (
      <FormControl required
                   fullWidth={fullWidth}
                   error={isError}
      >
        <InputLabel>{label}</InputLabel>
        <Input value={value}
               onChange={onChange}
               onBlur={onBlur}
        />
        <FormHelperText>{isError ? errorMessage : null}</FormHelperText>
      </FormControl>
    )
  }
}

export default RequiredTextField;
