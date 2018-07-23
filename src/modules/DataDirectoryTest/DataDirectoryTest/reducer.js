import types  from './types'

const initialState = {
  data: [],
  request: {},
};

const dataDirectoryTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ORDERS_FETCH_SUCCEED: {
      return {
        ...state,
        data: action.payload,
      }
    }
    case types.UPDATE_REQUEST: {
      return {
        ...state,
        request: action.request
      }
    }
    default:
      return state
  }
};

export default dataDirectoryTestReducer
