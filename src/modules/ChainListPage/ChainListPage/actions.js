import types from './types'

const chainsFetchSucceed = (chains) => ({
  type: types.CHAINS_FETCH_SUCCEED,
  chains,
});

const testsFetchSucceed = (testsAll, chains_editable) => ({
  type: types.TESTS_FETCH_SUCCEED,
  testsAll,
  chains_editable,
});

const startFetching = () => ({
  type: types.START_FETCHING,
});

const endFetching = () => ({
  type: types.END_FETCHING,
});

const filterByName = (name) => ({
  type: types.CHAINS_FILTER_BY_NAME,
  name,
});


export default {
  chainsFetchSucceed,
  testsFetchSucceed,
  startFetching,
  endFetching,
  filterByName,
}
