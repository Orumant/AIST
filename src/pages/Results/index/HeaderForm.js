import React from 'react'

import FilterBar from "../../global/FilterBar";


class HeaderForm extends React.Component {
  render () {

    const options=[
      {name: 'as', form: "as"},
      {name: 'stand', form: "stand"},];

    return (
      <div>
        <div className={'header-title'}>
          Результаты
        </div>
        <div className={'header-tools'}>
          <FilterBar options={options}/>
        </div>
      </div>
    )
  }
}

export default HeaderForm
