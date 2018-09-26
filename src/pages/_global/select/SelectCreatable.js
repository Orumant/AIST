import React from 'react';
import PropTypes from 'prop-types';
import Creatable from 'react-select/lib/Creatable';
import {withStyles} from '@material-ui/core/styles';
import {components} from './components'

import {styles} from './style';
import FormHelperText from "@material-ui/core/FormHelperText";

class SelectCreatable extends React.Component {
  render() {
    const {classes, theme, isMulti, label, options, placeholder, onChange, value, helpText} = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
      }),
    };

    return [
      <Creatable
        key="select-creatable"
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
        formatCreateLabel={(label) => "Создать " + label}
        noOptionsMessage={() => "Список пуст"}
        isMulti={isMulti}
      />,
      <FormHelperText key="help-text-select-creatable">{helpText? helpText: null}</FormHelperText>

    ];
  }
}

SelectCreatable.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(SelectCreatable);
