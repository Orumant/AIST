import React from 'react';
import PageNavigation from "./PageNavigation";
import Field from "./CreateForm/Field";
import AddButton from "./CreateForm/AddButton";
import {styles} from "../style";
import {withStyles} from "@material-ui/core/styles/index";
import Paper from "@material-ui/core/Paper";

class CreateForm extends React.Component {

  state = {
    name: '',
    isChecking: false,
    isError: false,
  };

  getChainData = () => {
    const {fields} = this.props;
    return ({form: fields})
  };

  checkError = (val) => this.setState({isError: val});

  onNext = (data) => {
    const { handleNext, validateForm, fields } = this.props;
    validateForm(fields, () => handleNext(data));
  };

  componentDidMount() {
    const {getFields, data, dataUpdated, needUpdate} = this.props;
    if (needUpdate) {
      getFields(data);
      dataUpdated();
    }
    this.setState({name: data.name});
  }

  componentDidUpdate() {
    const {getFields, data, dataUpdated, needUpdate} = this.props;
    if (needUpdate && data.name !== this.state.name) {
      getFields(data);
      this.setState({name: data.name})
      dataUpdated();
    }
  }

  render() {
    const { classes, fields, addField, updateField, deleteField,
      errorMessage, handleNext, ...handleNavigation} = this.props;
    const { isChecking} = this.state;

    const formFields = fields.map((field, ind) =>
      <Field key={field.type+ind}
             label={field.label}
             paramName={field.paramName}
             regEx={field.regEx}
             dropDownOptions={field.dropDownOptions}
             type={field.type}
             deleteField={() => deleteField(ind)}
             error={errorMessage[ind] ? errorMessage[ind]: {}}
             isChecking={isChecking}
             checkError={this.checkError}
             updateField={updateField(ind)}/>
    );

    return [
      <Paper className={classes.stepContent}>
        <div style={{display: 'flex'}}>
          <div style={{flexGrow: '1'}} />
          <AddButton addField={addField}/>
        </div>
        {formFields}
      </Paper>,
      <PageNavigation key="navigation-common-data" chain_data={this.getChainData()} handleNext={this.onNext} {...handleNavigation}/>
    ]
  }
}

export default withStyles(styles) (CreateForm);
