import {connect} from 'react-redux'
import {Operations} from "../../modules/_global/FilterStandMulti";
import FilterStandMulti from "../../pages/_global/filters/FilterStandMulti";

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

export default connect(mapStateToProps, mapDispatchToProps)(FilterStandMulti)
