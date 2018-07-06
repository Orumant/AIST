import {
  FILTER_DATA_DIRECTORY,
  ORDERS_FETCH_SUCCEED,
  ORDERS_FETCH_FAIL,
  SUBMIT_RERUN_ORDER_SUCCEED
} from '../constants'

const initialState = {
  data: [],
};

const dataDirectoryTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS_FETCH_SUCCEED: {
      return {
        ...state,
        data: action.payload
      }
    }
    default:
      return state
  }

};
export default dataDirectoryTestReducer
