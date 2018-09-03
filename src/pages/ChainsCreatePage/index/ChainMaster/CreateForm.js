import React from 'react';
import PageNavigation from "./PageNavigation";
import Field from "./CreateForm/Field";
import AddButton from "./CreateForm/AddButton";

class CreateForm extends React.Component {

  state = {
    isChecking: false,
  };

  getChainData = () => {
  };

  componentDidMount() {
  }

  submitData = (data) => {
    console.log(data);
    this.setState({isChecking: true});
  };

  getData = (data) => {console.log(data) ; return data};

  render() {
    const { fields, addField, deleteField, submit, ...handleNavigation} = this.props;
    const { isChecking} = this.state;
    console.log(fields);

    const formFields = fields.map((field, ind) => <div>
      <Field key={field.type} name={field.name} param={field.param} type={field.type} deleteField={() => deleteField(ind)} isChecking={isChecking} getData={this.getData}/>
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
