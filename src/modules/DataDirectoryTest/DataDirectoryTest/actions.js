import types from './types'

export const ordersFetchSucceed = (payload) => ({
  type: types.ORDERS_FETCH_SUCCEED,
  payload,
});

export const excludeOrder = (id_order) => ({
  type: types.ORDER_EXCLUDED,
  id_order
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
  excludeOrder,
}
