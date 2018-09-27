import React, {Component} from 'react';
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Input from "@material-ui/core/es/Input/Input";

class FilterByName extends Component{
  render() {
    return(
      <FormControl margin={'dense'} style={{width: '50%'}}>
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
