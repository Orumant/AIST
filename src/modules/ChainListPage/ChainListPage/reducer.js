import types from './types'

const initialState = {
  chains: [],
  isFetching: false,
};

const chainsListReducer = (state = initialState, action) => {
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
    case types.CHAINS_FETCH_SUCCEED: {
      return {
        ...state,
        chains: action.payload,
        isFetching: false,
      }
    }
    default:
      return state
  }
};

export default chainsListReducer
