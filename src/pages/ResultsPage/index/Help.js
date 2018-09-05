import React from 'react'
import {Button, Modal} from "react-bootstrap";
import {ColumnChooserHelp} from "./Help/ColumnChooserHelp";
import {DetailsHelp} from "./Help/Details";
import {FilterAddHelp} from "./Help/FilterAdd";
import {FilterDateHelp} from "./Help/FilterDate";
import {GroupHelp} from "./Help/Group";
import {SortHelp} from "./Help/Sort";


class Help extends React.Component {

  state = {
    show: null,
  };

  render() {
    const {show} = this.state;
    const {close} = this.props;

    const menu =
      <ul>
        <li><a onClick={() => this.setState({show: "columnChooser"})}>Работа со столбцами</a></li>
        <li><a onClick={() => this.setState({show: "details"})}>Работа с таблицей</a></li>
        <li><a onClick={() => this.setState({show: "group"})}>Группировка</a></li>
        <li><a onClick={() => this.setState({show: "sort"})}>Сортировка</a></li>
        <li><a onClick={() => this.setState({show: "filterDate"})}>Выбор даты</a></li>
        <li><a onClick={() => this.setState({show: "filterAdd"})}>Использование фильтров</a></li>
      </ul>;

    const content = () => {
      switch (show) {
        case "columnChooser": return ColumnChooserHelp;
        case "details": return DetailsHelp;
        case "group": return GroupHelp;
        case "sort": return SortHelp;
        case "filterDate": return FilterDateHelp;
        case "filterAdd": return FilterAddHelp;
        default:
          return menu
      }
    };

    return (

      <div >
        <Modal show={true} onHide={close} bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title>Справка</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {show? <a onClick={() => this.setState({show: null})}>Меню</a>: null}
            {content()}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Закрыть</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Help

