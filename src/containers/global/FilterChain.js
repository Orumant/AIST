import {connect} from 'react-redux'
import FilterChain from '../../pages/global/FilterChain'
import {fetchChainsTests} from "../../modules/global/FilterChain";


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
