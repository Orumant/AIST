import {connect} from 'react-redux'
import {fetchChainsTestsByMarker} from "../modules/ChainsTable";
import ChainsTable from "../pages/DataDirectoryTest/index/ChainsByMarkerForm/ChainsTable";


function mapStateToProps(state) {
  return {
    chains: state.chainsTableReducer.chains || [],
    tests: state.chainsTableReducer.tests || [],
    data: state.chainsTableReducer.data || [],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChainsTestsByMarker: (marker) => dispatch(fetchChainsTestsByMarker(marker)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChainsTable)
