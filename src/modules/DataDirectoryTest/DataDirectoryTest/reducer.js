import types  from './types'

const initialState = {
  data: [],
  request: {},
  isFetching: false,
};

const dataDirectoryTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_FETCHING: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case types.END_FETCHING: {
      return {
        ...state,
        isFetching: false,
      }
    }
    case types.ORDERS_FETCH_SUCCEED: {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      }
    }
    case types.ORDER_EXCLUDED: {
      let new_data = [...state.data];
      let index = -1;
      new_data.forEach((order, ind) => order.id_order === action.id_order? index=ind : null);
      if (index >= 0) new_data.splice(index, 1);

      return {
        ...state,
        data: new_data
      }
    }
    default:
      return state
  }
};

export default dataDirectoryTestReducer
