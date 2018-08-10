import {connect} from 'react-redux'
import { Actions } from '../../modules/global/FilterSidebar'
import FilterSidebar from "../../pages/global/FilterSidebar";

function mapStateToProps(state) {
  return {
    request: state.filterSidebarReducer.request,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilterRequest: (request) => dispatch(Actions.updateFilterRequest(request))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar)
