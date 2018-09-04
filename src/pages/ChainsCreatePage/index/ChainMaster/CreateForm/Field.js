import React from 'react';
import Card from "@material-ui/core/Card";
import './style.css';
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import indigo from '@material-ui/core/colors/indigo'
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@material-ui/icons/Clear';
import Chip from "@material-ui/core/Chip";
import RequiredTextField from "../../../../_global/RequiredTextField";
import MenuItems from "./Field/MenuItems";
import RegExp from "../../../../../containers/ChainsCreatePage/ChainMaster/CreateForm/RegExp";

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
    console.log(this.props)
    type ? this.setState({type, label, paramName, regEx: regEx || '', dropDownOptions: dropDownOptions || []}) : null;
  }

  changeInput = (prop) => (e) => {
    this.setState({[prop]: e.target.value})
  };

  handleChangeItems = (dropDownOptions) => {
    this.setState({dropDownOptions});
  };

  render() {
    const {updateField, deleteField, isChecking} = this.props;
    const {type, label, paramName, regEx, dropDownOptions} = this.state;
    console.log(dropDownOptions)

    const typeNames = {
      Input: "Текстовове поле",
      Date: "Дата",
      DropDown: "Выпадающее меню",
    };
    const colors = {Input: blue[700], Date: green[700], DropDown: indigo[700]};

    const fieldValues = [
      <RequiredTextField label="Имя поля" value={label}
                         onBlur={() => {updateField("label", label)}} onChange={this.changeInput("label")} fullWidth/>,
      <RequiredTextField label="Имя параметра" value={paramName}
                         onBlur={() => {updateField("paramName", paramName)}} onChange={this.changeInput("paramName")} fullWidth/>,
      type === "Input" ?
          <RegExp value={regEx} onChange={this.changeInput("regEx")}
                  onBlur={() => {updateField("regEx", regEx)}} isSubmit={isChecking}/> : null,
      type === "DropDown" ? <div style={{display: 'flex'}}><MenuItems items={dropDownOptions}
                                                                      updateField={updateField} onChange={this.handleChangeItems}/></div> : null
    ].filter(val => val);

    const content = fieldValues.map((val, ind) =>
      <div className={ ind < fieldValues.length - 1 ? "form-item" : "last-item"}>{val}</div>);

    return (
      <Card className="card">
        <div className="form-body">
          <div className="content-box">{content}</div>
          <div className="action-box">
            <Chip
              label={typeNames[type]}
              style={{backgroundColor: colors[type], color: 'white'}}
            />
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
