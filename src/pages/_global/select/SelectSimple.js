/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {withStyles} from '@material-ui/core/styles';
import {components} from './components'
import {styles} from './style';
import FormHelperText from "@material-ui/core/FormHelperText";

class SelectSimple extends React.Component {
  state = {
    value: null,
  };

  handleChange = value => {
    this.setState({value});
  };

  render() {
    const {classes, theme, isMulti, label, options, placeholder, onChange, value, helpText} = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
      }),
    };

    return [
        <Select
          isClearable
          classes={classes}
          styles={selectStyles}
          textFieldProps={{
            label: label,
            InputLabelProps: {
              shrink: true,
            },
          }}
          options={options}
          components={components}
          value={value}
          onChange={onChange}
          placeholder={placeholder ? placeholder : ''}
          isMulti={isMulti}
        />,
      <FormHelperText>{helpText? helpText: null}</FormHelperText>
    ];
  }
}

SelectSimple.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(SelectSimple);
