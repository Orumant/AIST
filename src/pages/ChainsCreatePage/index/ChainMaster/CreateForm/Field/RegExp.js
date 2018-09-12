import React from 'react';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";


class RegExp extends React.Component {

  render() {
    const {errorMessage, value, onChange, onBlur } = this.props;
    const isError = Boolean(errorMessage);

    return (
      <FormControl fullWidth
                   error={isError}
      >
        <InputLabel>Регулярное выражение</InputLabel>
        <Input value={value}
               onChange={onChange}
               onBlur={onBlur}
        />
        <FormHelperText>{isError ? errorMessage : null}</FormHelperText>
      </FormControl>
    )
  }
}

export default RegExp;
