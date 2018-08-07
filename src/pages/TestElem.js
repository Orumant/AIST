import React from 'react';
import Typography from '@material-ui/core/Typography';
import PagePattern from './PagePattern'

class TestElem extends React.Component {


  render() {
    const content = <Typography>{'You think water moves fast? You should see ice11111.'}</Typography>
    return (
      <PagePattern title="Заголовок" content={content}/>
    )
  }
}

export default TestElem;
