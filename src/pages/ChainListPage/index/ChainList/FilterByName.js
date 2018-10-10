import React from 'react'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import ClearIcon from '@material-ui/icons/Clear';

class FilterByName extends React.Component {

  state = {
    name: '',
  };

  handleNameSearching = (name) => {
    const { onChange } = this.props;
    this.setState({name});
    onChange(name);
  };

  render ()  {
    const { name } = this.state;

    return (
      <div style={{width: '50%'}} key={'filterByNameField'}>
        <FormControl style={{width: '90%'}}>
          <InputLabel>Поиск по имени</InputLabel>
          <Input id={"filterChainsByNameInputField"}
                 onChange={(e) => this.handleNameSearching(e.target.value)}
                 fullWidth={true}
                 placeholder={'Введите название цепочки'}
                 type={'text'}
                 value={name}/>
        </FormControl>
        {name.length > 0 &&
        <ClearIcon onClick={() => this.handleNameSearching('')}
                   style={{width: '10px !important', cursor: 'pointer'}}/>}
      </div>

    )
  }
}

export default FilterByName
