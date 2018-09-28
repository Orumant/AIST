import types from './types'

const initialState = {
  tests: [],
};

const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FILTERS_TESTS: {
      return {
        ...state,
        tests: action.tests}
    }
    default:
      return state
  }
};

export default searchBarReducer
