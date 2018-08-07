import types from './types'

const initialState = {
  data: [],
  request: {},
  chains: [],
  tests: [],
};

const ResultsReducer = (state = initialState, action) => {
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
    case types.FETCH_FILTERS_CHAINS: {
      return {
        ...state,
        chains: action.chains}
    }
    case types.FETCH_FILTERS_TESTS: {
      return {
        ...state,
        tests: action.tests}
    }
    default:
      return state
  }
};

export default ResultsReducer
