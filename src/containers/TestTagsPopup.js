import {connect} from 'react-redux'
import TestTagsPopup from "../pages/DataDirectoryTest/index/ChainsByMarkerForm/ChainsTable/TestTagsPopup";
import {fetchTags} from "../modules/DataDirectoryTest/TestTagsPopup";


function mapStateToProps(state) {
  return {
    tags: state.testTagsPopupReducer.tags,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTags: (test_id) => dispatch(fetchTags(test_id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestTagsPopup)
