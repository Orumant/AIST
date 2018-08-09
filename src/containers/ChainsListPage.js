import {connect} from 'react-redux'
import {
  fetchAllChainTemplates,
  fetchFullChainTemplateList,
  fetchStands,
  filterEntityByTags,
} from '../api'
import {
  filterChainTemplateListByParams,
  filterChainTemplateListByTagsSucceed,
  clearFilterChainTemplateList,
} from '../actions'
import ChainsListPage from '../components/ChainsListPage'

function mapStateToProps(state) {
  return {
    chainTemplateList: state.chainTemplateList.chainTemplateList,
    fullChainTemplateList: state.chainTemplateList.fullChainTemplateList,
    filterChainTemplateList: state.chainTemplateList.filterChainTemplateList,
    stands: state.chainTemplateList.stands,
    tags: state.chainTemplateList.tags,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllChainTemplates: () => dispatch(fetchAllChainTemplates()),
    fetchFullChainTemplateList: () => dispatch(fetchFullChainTemplateList()),
    fetchStands: () => dispatch(fetchStands()),
    filterChainTemplateListByParams: (filter) => dispatch(filterChainTemplateListByParams(filter)),
    filterChainTemplateListByTags: (filterTags) => dispatch(filterEntityByTags(filterTags,
                                                                               'chain_templates',
                                                                               filterChainTemplateListByTagsSucceed)),
    clearFilterChainTemplateList: () => dispatch(clearFilterChainTemplateList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChainsListPage)
