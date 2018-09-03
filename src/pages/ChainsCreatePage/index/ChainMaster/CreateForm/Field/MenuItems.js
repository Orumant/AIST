import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from '@material-ui/icons/Add';

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import './style.css'


class MenuItems extends React.Component {

  state = {
    val: '',
    error: 0,
  };

  addMenuItem = (e) => {
    const {items, onChange} = this.props;
    if (!e.key || e.key === 'Enter') {
      let error = this.checkInput();
      if (!error) {
        let new_items = [...items];
        new_items.push(this.state.val);
        onChange(new_items);
        this.setState({val: ''});
      }
      this.setState({error});
    }
  };

  deleteMenuItem = (index) => {
    const {items, onChange} = this.props;
    let new_items = [...items];
    new_items.splice(index, 1);
    onChange(new_items);
  };

  handleInput = (event) => {
    this.setState({val: event.target.value})
  };

  checkInput = () => {
    const {val} = this.state;
    const {items} = this.props;
    if (val.length === 0) return 1;
    if (items.indexOf(val) !== -1) return 2;
    return 0;
  };

  render() {
    const {items} = this.props;
    const {val, error} = this.state;

    const messages = {
      1: "Поле не может быть пустым",
      2: "Значения в меню не могут повторяться"
    };

    const itemList = items.map((val, ind) =>
      <Chip
        style={{margin: '8px'}}
        onDelete={() => this.deleteMenuItem(ind)}
        label={val}/>);

    const emptyItemList = <div className="empty-item-list"> Список значений не указан</div>;

    return [
      <div style={{width: "150px"}}>
        <FormControl fullWidth
                     error={error}
        >
          <InputLabel>Значение</InputLabel>
          <Input value={val}
                 onChange={this.handleInput}
                 onKeyPress={this.addMenuItem}
                 endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={this.addMenuItem}>
                        <AddIcon/>
                      </IconButton>
                    </InputAdornment>
                 }
          />
          <FormHelperText>{error ? messages[error] : null}</FormHelperText>
        </FormControl>
      </div>,
      <div style={{alignSelf: 'center', padding: '8px'}}>
        {items.length > 0 ? itemList : emptyItemList}
      </div>
    ]
  }
}


export default MenuItems;
