import React from 'react'

import FilterBar from "../../global/FilterBar";
import ActionsBar from "../../../containers/Results/ActionsBar";


class HeaderForm extends React.Component {

  render () {
    const {...elem_props} = this.props;

    return (
      <div>
        <div className={'header-title'}>
          Результаты
        </div>
        <div className={'header-tools'}>
          <ActionsBar {...elem_props}/>
        </div>
      </div>
    )
  }
}

export default HeaderForm
