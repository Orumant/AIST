import types from './types'

const initialState = {
  chains: [],
  tests: [],
};

const searchBarReducerChainList = (state = initialState, action) => {
  switch (action.type) {
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

export default searchBarReducerChainList
