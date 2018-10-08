import React from 'react';
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import FormHelperText from "@material-ui/core/FormHelperText";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";

class TestInputJobParamPassword extends React.Component {

  state = {
    showPassword: false,
    passwordInputType: true,
  };

  handleShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
      passwordInputType: !this.state.passwordInputType,
    });
  };

  render() {
    const {value, onChange, isError, help, keyIn} = this.props;
    return (
      <FormControl fullWidth required error={isError} key={keyIn+'-form-control'}>
        <Input
          key={keyIn}
          type={this.state.passwordInputType ? 'password' : 'text'}
          value={value ? value : ''}
          onChange={onChange}
          endAdornment = {
            <InputAdornment position={'end'}>
              <IconButton aria-label={'Показать пароль'}
              onClick={this.handleShowPassword}>
                {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText>{help}</FormHelperText>
      </FormControl>
    )
  }
}

export default TestInputJobParamPassword;
