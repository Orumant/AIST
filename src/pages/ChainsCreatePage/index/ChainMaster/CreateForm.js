import React from 'react';
import PageNavigation from "./PageNavigation";
import Field from "./CreateForm/Field";
import AddButton from "./CreateForm/AddButton";

class CreateForm extends React.Component {

  state = {
    isChecking: false,
  };

  getChainData = () => {
    const {fields} = this.props;
    return ({form: fields})
  };

  submitData = (data) => {
    console.log(data);
    this.setState({isChecking: true});
  };

  render() {
    const { fields, addField, updateField, deleteField, submit, ...handleNavigation} = this.props;
    const { isChecking} = this.state;

    const formFields = fields.map((field, ind) => <div>
      <Field key={field.type}
             label={field.label}
             paramName={field.paramName}
             regEx={field.regEx}
             dropDownOptions={field.dropDownOptions}
             type={field.type}
             deleteField={() => deleteField(ind)}
             isChecking={isChecking}
             updateField={updateField(ind)}/>
    </div>);

    return [
      <div>
        <div style={{display: 'flex'}}>
          <div style={{flexGrow: '1'}} />
          <AddButton addField={addField}/>
        </div>
        {formFields}
      </div>,
      <PageNavigation key="navigation-common-data" chain_data={this.getChainData()} submit={this.submitData} {...handleNavigation}/>
    ]
  }
}

export default CreateForm;
