import types from './types'

const dataFetchSucceed = (chainsAll, testsAll, groupsAll, templatesAll, chain_data) => ({
  type: types.DATA_FETCH_SUCCEED,
  chainsAll,
  testsAll,
  groupsAll,
  templatesAll,
  chain_data,
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

const chainAdded = () => ({
  type: types.CHAIN_ADDED
});


export default {
  dataFetchSucceed,
  startFetching,
  endFetching,
  dataUpdated,
  chainAdded,
}
