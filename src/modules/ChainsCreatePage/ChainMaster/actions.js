import types from './types'

const dataFetchSucceed = (templatesAll, testsAll, groupsAll) => ({
  type: types.DATA_FETCH_SUCCEED,
  templatesAll,
  testsAll,
  groupsAll
});

const dataUpdated = (chain_data) => ({
  type: types.CHAIN_DATA_UPDATED,
  chain_data
});

const startFetching = () => ({
  type: types.START_FETCHING,
});

const endFetching = () => ({
  type: types.END_FETCHING,
});


export default {
  dataFetchSucceed,
  startFetching,
  endFetching,
  dataUpdated,
}
