import types from './types'

const ordersFetchSucceed = (payload) => ({
  type: types.ORDERS_FETCH_SUCCEED,
  payload,
});

const startFetching = () => ({
  type: types.START_FETCHING,
});

const endFetching = () => ({
  type: types.END_FETCHING,
});


export default {
  ordersFetchSucceed,
  startFetching,
  endFetching,
}
