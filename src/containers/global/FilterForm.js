import {connect} from 'react-redux'
import FilterChain from '../../pages/global/FilterChain'
import {createRequest, fetchChainsTests} from "../../modules/global/FilterChain";
import FilterForm from "../../pages/global/FilterForm";


function mapStateToProps(state) {
  return {
    chains: state.filterFormReducer.chains || [],
    tests: state.filterFormReducer.tests || [],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChainsTests: () => dispatch(fetchChainsTests()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm)
