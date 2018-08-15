import {connect} from 'react-redux'
import { Actions } from '../../modules/_global/FilterSidebar'
import FilterSidebar from "../../pages/_global/FilterSidebar";

function mapStateToProps(state) {
  return {
    request: state.filterSidebarReducer.request,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilterRequest: (request) => dispatch(Actions.updateFilterRequest(request)),
    getStartFilterRequest: (request) => dispatch(Actions.getStartFilterRequest(request))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar)
