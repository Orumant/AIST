import types from './types'

const filterTestFetchSucceed = (tests) => ({
  type: types.FILTER_TEST_FETCH_SUCCEED,
  tests
});

const startFetching = () => ({
  type: types.FILTER_START_FETCHING,
});

const endFetching = () => ({
  type: types.FILTER_START_FETCHING,
});


export default {
  filterTestFetchSucceed,
  startFetching,
  endFetching,
}
