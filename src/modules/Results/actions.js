import types from './types'

const ordersFetchSucceed = (payload) => ({
  type: types.ORDERS_FETCH_SUCCEED,
  payload,
});

const updateRequest = (request) => ({
  type: types.UPDATE_REQUEST,
  request,
});

export const fetchFiltersChains = (chains) => ({
  type: types.FETCH_FILTERS_CHAINS,
  chains,
});

export const fetchFiltersTests = (tests) => ({
  type: types.FETCH_FILTERS_TESTS,
  tests,
});


export default {
  ordersFetchSucceed,
  updateRequest,
  fetchFiltersChains,
  fetchFiltersTests,
  }
