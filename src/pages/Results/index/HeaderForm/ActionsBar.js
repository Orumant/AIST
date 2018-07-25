import React from 'react'
import FilterBar from "../../../global/FilterBar";
import FilterAS from "../../../global/FilterAS";
import FilterStand from "../../../../containers/global/FilterStand";


class ActionsBar extends React.Component {

  componentDidMount() {
    this.props.fetchChainsTests();
  }

  render () {
    const {tests,  ...others} = this.props;
    const options=[
      {name: 'as', form: <FilterAS  key={'system-filter'} tests={tests} {...others}/>},
      {name: 'stand', form: <FilterStand  key={'stand-filter'} tests={tests} {...others}/>},];
    return (
      <div>
        <FilterBar options={options}/>
      </div>
    )
  }
}

export default ActionsBar
