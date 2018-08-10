import {connect} from 'react-redux'
import FilterStand from "../../pages/global/FilterStandNew";
import {getAllStands} from "../../modules/global/FilterStand";

function mapStateToProps(state) {
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
