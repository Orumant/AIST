import React from 'react';
import Card from "@material-ui/core/Card";
import './style.css';
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@material-ui/icons/Clear';
import RequiredTextField from "../../../../_global/RequiredTextField";
import MenuItems from "./Field/MenuItems";
import RegExp from "./Field/RegExp";
import FieldTypeChip from "./Field/FieldTypeChip";

class Field extends React.Component {

  state = {
    type: "text",
    label: '',
    paramName: '',
    regEx: '',
    dropDownOptions: [],
  };

  componentDidMount() {
    const {type, label, paramName, regEx, dropDownOptions} = this.props;
    if (type) this.setState({type, label, paramName, regEx: regEx || '', dropDownOptions: dropDownOptions || []});
  }

  changeInput = (prop) => (e) => {
    this.setState({[prop]: e.target.value})
  };

  handleChangeItems = (dropDownOptions) => {
    this.setState({dropDownOptions});
  };

  render() {
    const {updateField, deleteField, error} = this.props;
    const {type, label, paramName, regEx, dropDownOptions} = this.state;

    const fieldValues = [
      <div className="form-item" key="form-item-label">
        <RequiredTextField label="Имя поля" value={label} errorMessage={error.label}
                           onBlur={() => {
                             updateField("label", label)
                           }} onChange={this.changeInput("label")} fullWidth/>
      </div>,
      <div className="form-item" key="form-item-param-name">
        <RequiredTextField label="Имя параметра" value={paramName} errorMessage={error.paramName}
                           onBlur={() => {
                             updateField("paramName", paramName)
                           }} onChange={this.changeInput("paramName")} fullWidth/>
      </div>,
      type === "Input" ?
        <div className="last-item" key="form-item-regEx">
          <RegExp value={regEx} onChange={this.changeInput("regEx")} errorMessage={error.regEx}
                  onBlur={() => {
                    updateField("regEx", regEx)
                  }}/></div> : null,
      type === "DropDown" ?
        <div className="last-item" key="form-item-dropDown">
          <div style={{display: 'flex'}}  key="form-item-dropDown-block">
            <MenuItems items={dropDownOptions} updateField={updateField} onChange={this.handleChangeItems}/>
          </div>
        </div> : null
    ].filter(val => val);

    return (
      <Card className="card">
        <div className="form-body">
          <div className="content-box">{fieldValues}</div>
          <div className="action-box">
            <FieldTypeChip type={type}/>
            <IconButton onClick={deleteField}>
              <ClearIcon/>
            </IconButton>
          </div>
        </div>
      </Card>
    )
  }
}

export default Field;
