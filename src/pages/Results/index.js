import React from 'react'
import TestsTable from "./index/TestsTable";

class ResultsPage extends React.Component {

  render() {
    const {orders} = this.props
    return (
      <TestsTable orders={orders}/>
    )
  }
}

export default ResultsPage
