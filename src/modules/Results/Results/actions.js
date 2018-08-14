import types from './types'

const ordersFetchSucceed = (payload) => ({
  type: types.ORDERS_FETCH_SUCCEED,
  payload,
});

const updateRequest = (request) => ({
  type: types.UPDATE_REQUEST,
  request,
});

const startFetching = () => ({
  type: types.START_FETCHING
});


export default {
  ordersFetchSucceed,
  updateRequest,
  startFetching,
}
