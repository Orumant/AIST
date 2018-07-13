import {connect} from 'react-redux'
import {fetchChainsTestsByMarker} from "../modules/ChainsTable";
import ChainsTable from "../component/ChainsTable";


function mapStateToProps(state) {
  return {
    chains: state.chainsTableReducer.chains || [],
    tests: state.chainsTableReducer.tests || [],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChainsTestsByMarker: (marker) => dispatch(fetchChainsTestsByMarker(marker)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChainsTable)
