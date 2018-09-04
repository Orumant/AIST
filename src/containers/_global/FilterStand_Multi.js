import {connect} from 'react-redux'
import {Operations} from "../../modules/_global/FilterStandMulti";
import FilterStand_Multi from "../../pages/_global/filters/FilterStand_Multi";

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

export default connect(mapStateToProps, mapDispatchToProps)(FilterStand_Multi)
