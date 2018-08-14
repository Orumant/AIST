import React from 'react';

class TestProgress extends React.Component {

  render () {
    const {all, now} = this.props;
    const width = now/all*100;
    return (
      <div className="progress">
        <div className="progress-bar progress-bar-info" style={{width: `${width}%`}}></div>
        <span>{now}/{all}</span>
      </div>
    )
  }
}

export default TestProgress
