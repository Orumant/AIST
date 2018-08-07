import types from './types'

const ordersFetchSucceed = (payload) => ({
  type: types.ORDERS_FETCH_SUCCEED,
  payload,
});

const updateRequest = (request) => ({
  type: types.UPDATE_REQUEST,
  request,
});


export default {
  ordersFetchSucceed,
  updateRequest
}
