import React from 'react';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import Chip from "@material-ui/core/Chip";


class FieldTypeChip extends React.Component {

  render() {
    const {type} = this.props;

    const typeNames = {
      Input: "Текстовове поле",
      DatePicker: "Дата",
      DropDown: "Выпадающее меню",
    };
    const colors = {Input: blue[700], DatePicker: green[700], DropDown: indigo[700]};

    return (
      <Chip
        label={typeNames[type]}
        style={{backgroundColor: colors[type], color: 'white'}}
      />
    )
  }
}


export default FieldTypeChip;
