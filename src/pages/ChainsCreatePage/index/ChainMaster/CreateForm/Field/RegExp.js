import React from 'react';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";


class RegExp extends React.Component {

  componentDidUpdate() {
    const {value, validateField, isSubmit} = this.props;
    if (isSubmit) validateField(value)
  }

  render() {
    const {error, errorMessage, value, onChange, onBlur } = this.props;

    return (
      <FormControl fullWidth
                   error={error}
      >
        <InputLabel>Регулярное выражение</InputLabel>
        <Input value={value}
               onChange={onChange}
               onBlur={onBlur}
        />
        <FormHelperText>{error ? errorMessage : null}</FormHelperText>
      </FormControl>
    )
  }
}

export default RegExp;
