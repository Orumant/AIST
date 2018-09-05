import {connect} from 'react-redux'
import FilterStand from "../../pages/_global/filters/FilterStand";
import {Operations} from "../../modules/_global/FilterStand";

function mapStateToProps(state) {
  return {
    stands: state.filterStandReducer.stands,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllStands: () => dispatch(Operations.getAllStands())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterStand)
