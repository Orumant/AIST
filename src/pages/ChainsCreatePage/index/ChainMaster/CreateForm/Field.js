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
import RegExp from "../../../../../containers/ChainsCreatePage/RegExp";

class Field extends React.Component {

  state = {
    type: "text",
    nameField: '',
    nameParam: '',
    regExp: '',
    menuItems: [],
  };

  componentDidMount() {
    const {type, name, param, regExp, menuItems} = this.props;
    type ? this.setState({type, nameField: name, nameParam: param, regExp: regExp || '', menuItems: menuItems || []}) : null;
  }

  componentDidUpdate() {
    const {getData} = this.props;
    let data = {};
    Object.keys(this.state).forEach(key => this.state[key].length > 0 ? data[key] = this.state[key] : null );
    getData(data);
  }

  changeInput = (prop) => (e) => {
    this.setState({[prop]: e.target.value})
  };

  handleChangeItems = (menuItems) => {
    this.setState({menuItems});
  };

  render() {
    const {deleteField, isChecking} = this.props;
    const {type, nameField, nameParam, menuItems, regExp} = this.state;

    const typeNames = {
      text: "Текстовове поле",
      date: "Дата",
      dropdown: "Выпадающее меню",
    };
    const colors = {text: blue[700], date: green[700], dropdown: indigo[700]};

    const fieldValues = [
      <RequiredTextField label="Имя поля" value={nameField} onChange={this.changeInput("nameField")} fullWidth/>,
      <RequiredTextField label="Имя параметра" value={nameParam} onChange={this.changeInput("nameParam")} fullWidth/>,
      type === "text" ?
          <RegExp value={regExp} onChange={this.changeInput("regExp")} isSubmit={isChecking}/> : null,
      type === "dropdown" ? <div style={{display: 'flex'}}><MenuItems items={menuItems} onChange={this.handleChangeItems}/></div> : null
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
