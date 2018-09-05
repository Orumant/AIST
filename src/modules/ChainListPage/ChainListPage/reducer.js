import types from './types'

const initialState = {
  chains: [],
  testsAll: [],
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
        chains: action.chains,
        isFetching: false,
      }
    }

    case types.TESTS_FETCH_SUCCEED: {
      const tests = action.testsAll;
      let testsData = {};
      tests.forEach(test => testsData={...testsData, [test.test_id] : test.test_name});
      return {
        ...state,
        testsAll: testsData,
        isFetching: false,
      }
    }
    default:
      return state
  }
};

export default chainsListReducer
