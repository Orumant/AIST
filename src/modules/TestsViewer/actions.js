import types from './types';

const dataLoadingStarted = () => ({
  type: types.TESTS_TABLE_DATA_LOADING_STARTED,
});

const dataLoadingEnded = () => ({
  type: types.TESTS_TABLE_DATA_LOADING_ENDED,
});

const fetchSucceed = (payload) => ({
  type: types.TESTS_TABLE_TESTS_FETCH_SUCCEED,
  payload,
});

const filterByName = (name) => ({
  type: types.TESTS_TABLE_FILTER_BY_NAME_TRIGGERED,
  name,
});

export default {
  dataLoadingStarted,
  fetchSucceed,
  dataLoadingEnded,
  filterByName,
}
