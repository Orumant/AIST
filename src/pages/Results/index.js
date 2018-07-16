import React from 'react'
import TestsTable from "./index/TestsTable";

class ResultsPage extends React.Component {

  componentDidMount() {
    const {updateRequestAndOrders, request} = this.props;
    console.log(updateRequestAndOrders)
    updateRequestAndOrders({}, request)
  }

  render() {
    const {orders} = this.props
    console.log(orders)
    return (
      <div>
        this is results!
        <TestsTable orders={orders}/>
      </div>

    )
  }
}

export default ResultsPage
