import types from './types'

export const getOrderDataJSON = (order_data) => ({
  type: types.GET_ORDER_DATA_JSON,
  order_data
});

export default {
  getOrderDataJSON
}
