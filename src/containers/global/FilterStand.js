import {connect} from 'react-redux'
import FilterStand from "../../pages/global/FilterStand";
import {getAllStands} from "../../modules/global/FilterStand";

function mapStateToProps(state) {
  console.log('als;kdlskdl;k')
  return {
    stands: state.filterStandReducer.stands,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllStands: () => dispatch(getAllStands())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterStand)
