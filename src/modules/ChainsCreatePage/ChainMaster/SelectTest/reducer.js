import types from './types'

const initialState = {
  tests: [],
  isFetching: false,
};

const selectTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_START_FETCHING: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case types.FILTER_END_FETCHING: {
      return {
        ...state,
        isFetching: false,
      }
    }
    case types.FILTER_TEST_FETCH_SUCCEED: {
      return {
        ...state,
        tests: action.tests,
        isFetching: false,
      }
    }
    default:
      return state
  }
};

export default selectTestReducer
