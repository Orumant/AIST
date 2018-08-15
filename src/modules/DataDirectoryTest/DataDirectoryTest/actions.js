import types from './types'

export const ordersFetchSucceed = (payload) => ({
  type: types.ORDERS_FETCH_SUCCEED,
  payload,
});

export const updateRequest = (request) => ({
  type: types.UPDATE_REQUEST,
  request
});

const startFetching = () => ({
  type: types.START_FETCHING,
});

const endFetching = () => ({
  type: types.END_FETCHING,
});

export default {
  ordersFetchSucceed,
  updateRequest,
  startFetching,
  endFetching,
}
