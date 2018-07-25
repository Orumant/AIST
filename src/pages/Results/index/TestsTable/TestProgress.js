import React from 'react'
import {ProgressBar} from "react-bootstrap";

class TestProgress extends React.Component {

  render () {
    const now = 4;
    const all = 7;
    const width = now/all*100;
    return (
      <div class="progress">
        <div class="progress-bar progress-bar-info" style={{width: `${width}%`}}></div>
        <span>{now}/{all}</span>
      </div>
    )
  }
}

export default TestProgress
