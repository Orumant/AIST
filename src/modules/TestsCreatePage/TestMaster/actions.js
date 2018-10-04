import types from './types'

const dataFetchSucceed = (asAll, standsAll, test_data) => ({
  type: types.DATA_FETCH_SUCCEED,
  asAll,
  standsAll,
  test_data,
});

const dataUpdated = (test_data) => ({
  type: types.TEST_DATA_UPDATED,
  test_data
});

const startFetching = () => ({
  type: types.START_FETCHING,
});

const endFetching = () => ({
  type: types.END_FETCHING,
});

const testAdded = () => ({
  type: types.TEST_ADDED
});


export default {
  dataFetchSucceed,
  startFetching,
  endFetching,
  dataUpdated,
  testAdded,
}
