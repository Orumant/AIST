import React, {Component} from 'react';
import InputField from "./TestFilters/InputField";
import SelectInput from "./TestFilters/SelectInput";
import Button from "@material-ui/core/es/Button/Button";
import DoneIcon from '@material-ui/icons/Done';

class TestFilters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      system: '',
      stand: '',
      tags: [],
    };
  }

  clearFilters = () => {
    this.setState({
      name: '',
      system: '',
      stand: '',
      tags: [],
    });
    this.props.clearFilters();
  };

  onInputChange = field => event => {
    this.setState({[field]: event.target.value});
  };

  onSingleTagDelete = tag => () => {
    this.setState({tags: this.state.tags.filter(cur => cur !== tag)})
  };

  submitFilters = () => {
    this.props.submitFilters({filters: this.state});
  };

  render() {
    const {stands, systems, tags} = this.props;
    return (
        <form noValidate autoComplete={'off'} style={{margin: 5}}>
          <InputField id={'searchByNameInput'}
                      label={'Поиск по имени'}
                      value={this.state.name}
                      onChange={this.onInputChange('name')}/>
          <SelectInput id={'searchBySystemInput'}
                       label={'Поиск по АС'}
                       value={this.state.system}
                       options={systems}
                       onChange={this.onInputChange('system')}/>
          <SelectInput id={'searchByStandsInput'}
                       label={'Поиск по стенду'}
                       value={this.state.stand}
                       options={stands}
                       onChange={this.onInputChange('stand')}/>
          <SelectInput id={'searchByTagsInput'}
                       label={'Поиск по тегам'}
                       value={this.state.tags}
                       options={tags}
                       onOptionDelete={this.onSingleTagDelete}
                       multi={true}
                       onChange={this.onInputChange('tags')}/>
          <Button color={'primary'} variant={'contained'} onClick={this.submitFilters}><DoneIcon/>Применить</Button>
          <Button color={'primary'} variant={'contained'} onClick={this.clearFilters}>Очистить</Button>
        </form>
    )
  }
}

export default TestFilters;
