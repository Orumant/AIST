import types from './types'

export const ordersFetchSucceed = (payload) => ({
  type: types.ORDERS_FETCH_SUCCEED,
  payload,
});

export const updateRequest = (request) => ({
  type: types.UPDATE_REQUEST,
  request
});

export default {
  ordersFetchSucceed,
  updateRequest
}
