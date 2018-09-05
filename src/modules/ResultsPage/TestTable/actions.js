import types from './types'

export const orderDetailsFetchSucceed = (details) => ({
  type: types.ORDER_DETAILS_FETCH_SUCCEED,
  details,
});


export default {
  orderDetailsFetchSucceed,
  }
