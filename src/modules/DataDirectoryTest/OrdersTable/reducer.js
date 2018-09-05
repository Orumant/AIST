import types from './types';

const initialState = {
  order_data: {},
};

const ordersTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ORDER_DATA_JSON: {
      return {
        ...state,
        order_data: action.order_data}
    }
    default:
      return state
  }
};

export default ordersTableReducer
