import React from 'react'
import {Button, Col, ControlLabel, FormControl, Form, FormGroup, Modal} from "react-bootstrap";
import Notifications from "react-notification-system-redux";


class RegistrationPage extends React.Component {

  state = {
    login: "",
    password: "",
    confirmPassword: ""
  };

  ChangeLPP(payload) {
    if (payload.key === "name") {
      this.setState({login: payload.value})
    }
    if (payload.key === "password") {
      this.setState({password: payload.value})
    }
    if (payload.key === "confirmPassword") {
      this.setState({confirmPassword: payload.value})
    }
  }

  CreateAccount() {
    const {loginPasswordChange, ReqistrationButtonClick, history} = this.props;
    loginPasswordChange({value: this.state.login, key: "name"});
    loginPasswordChange({value: this.state.password, key: "password"});
    loginPasswordChange({value: this.state.confirmPassword, key: "confirmPassword"});
    ReqistrationButtonClick(this.state, history);
  }

  render() {
    return (

      <div className="form">
          <Modal.Dialog className={"image-background"}>
            <Modal.Header>
              <Modal.Title>
                Создать пользователя
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal>
                <FormGroup controlId="formHorizontalLogin">
                  <Col componentClass={ControlLabel} sm={2}>
                    Логин
                  </Col>
                  <Col sm={10}>
                    <FormControl className="form-control"
                                 type="text"
                                 value={this.state.login}
                                 onChange={e => this.ChangeLPP({value: e.target.value, key: "name"})}
                                 placeholder="Enter login"/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Пароль
                  </Col>
                  <Col sm={10}>
                    <FormControl className="form-control"
                                 type="password"
                                 value={this.state.password}
                                 onChange={e => this.ChangeLPP({value: e.target.value, key: "password"})}
                                 placeholder="Enter password"/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalConfirmPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Подтвердить пароль
                  </Col>
                  <Col sm={10}>
                    <FormControl className="form-control"
                                 type="password"
                                 value={this.state.confirmPassword}
                                 onChange={e => this.ChangeLPP({value: e.target.value, key: "confirmPassword"})}
                                 placeholder="Confirm password"/>
                  </Col>
                </FormGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" className="btn btn-default btn-sm"
                      onClick={() => this.CreateAccount()}
              >Создать</Button>
            </Modal.Footer>
          </Modal.Dialog>
        <Notifications notifications={this.props.notifications}/>
      </div>
    )
  }
}

export default RegistrationPage;
