import {connect} from 'react-redux'
import FilterChain from '../component/FilterChain'
import {createRequest, fetchChainsTests} from "../modules/FilterChain";


function mapStateToProps(state) {
  return {
    chains: state.filterChainReducer.chains || [],
    tests: state.filterChainReducer.tests || [],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChainsTests: () => dispatch(fetchChainsTests()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterChain)
