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
