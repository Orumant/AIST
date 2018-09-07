import React from 'react';
import TextField from "@material-ui/core/es/TextField/TextField";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Select from "@material-ui/core/es/Select/Select";
import Chip from "@material-ui/core/es/Chip/Chip";

export default function SelectInput({
                                      id,
                                      options,
                                      value,
                                      onChange,
                                      label,
                                      onOptionDelete,
                                      placeholder = 'Выберите значение из списка',
                                      multi = false,
                                    }) {
  if (multi === true) {
    return (
        <FormControl fullWidth
                     margin={'dense'}>
          <InputLabel shrink={value.length > 0}>{label}</InputLabel>
          <Select multiple
                  value={value}
                  onChange={onChange}
                  inputProps={{
                    multiline: true,
                    rows: 2,
                  }}
                  renderValue={selected => selected.map(value => (
                    <Chip key={value}
                          label={value}
                          color={'primary'}
                          onDelete={onOptionDelete(value)}/>
                  ))}>
            {options.map( option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
    )
  } else {
    return (
        <TextField id={id}
                   select
                   label={label}
                   fullWidth
                   margin={'dense'}
                   placeholder={placeholder}
                   InputLabelProps={{shrink: value !== ''}}
                   value={value}
                   onChange={onChange}>
          {options.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
    )
  }
}
