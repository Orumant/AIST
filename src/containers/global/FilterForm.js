import {connect} from 'react-redux'
import {fetchChainsTests} from "../../modules/global/FetchChainAndTest";
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
