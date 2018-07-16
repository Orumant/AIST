import React from 'react'
import {Button, Modal} from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/es/OverlayTrigger";
import Popover from "react-bootstrap/es/Popover";
import {JSONwithoutBrakets} from "../../../../../utils/filters/index";


class TestTagsPopup extends React.Component {

  render() {
    const {fetchTags, test_id, tags} = this.props;
    const popover = () => (
      <Popover title={'Теги'}>{tags.length > 0? JSONwithoutBrakets(JSON.stringify(tags)): 'Теги не найдены'}</Popover>);

    return (
      <OverlayTrigger overlay={popover()} onMouseOver={() => fetchTags(test_id)}><a>{test_id} </a></OverlayTrigger>
    )
  }
}

export default TestTagsPopup

