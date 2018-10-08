import React, {Component} from 'react';
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";

class FilterByName extends Component {
  render() {
    return (
      <FormControl margin={'dense'} style={this.props.style || {}}>
        <InputLabel>Поиск по имени</InputLabel>
        <Input id={this.props.id}
               onChange={(event) => this.props.onChange(event.target.value)}
               fullWidth={true}
               placeholder={'Начните вводить имя'}
               type={'text'}
               value={this.props.value}/>
      </FormControl>
    )
  }
}

export default FilterByName;
