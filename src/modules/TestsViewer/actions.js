import types from './types';

const fetchSucceed = (data) => ({
  type: types.TESTS_TABLE_FETCH_SUCCEED,
  payload: {
    tests: data[0].data,
    systems: data[1].data,
    stands: data[2].data,
  }
});

const dataLoadingStarted = () => ({
  type: types.TESTS_TABLE_DATA_LOADING_STARTED,
});

const submitFilters = (filters) => ({
  type: types.TESTS_TABLE_SUBMIT_FILTERS,
  payload: filters,
});

const clearFilters = () => ({
  type: types.TESTS_TABLE_CLEAR_FILTERS,
});

export default {
  fetchSucceed,
  dataLoadingStarted,
  submitFilters,
  clearFilters,
}
