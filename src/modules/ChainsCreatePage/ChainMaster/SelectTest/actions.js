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

const testSelected = (selection, testsAll) => ({
  type: types.CHAIN_MASTER_TEST_SELECTED,
  selection,
  testsAll
});

const testReordered = (tests) => ({
  type: types.CHAIN_MASTER_TEST_REORDERED,
  tests,
});

const testRemoved = (index) => ({
  type: types.CHAIN_MASTER_TEST_REMOVED,
  index,
});

export default {
  filterTestFetchSucceed,
  startFetching,
  endFetching,
  testSelected,
  testReordered,
  testRemoved,
}
