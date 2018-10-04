import types from './types'

const initialState = {
  chains: [],
  chains_editable: [],
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
      const chains = action.chains_editable.map(chain => chain.name);
      let testsData = {};
      tests.forEach(test => testsData={...testsData, [test.test_id] : [test.a_system,test.test_name]});
      return {
        ...state,
        testsAll: testsData,
        chains_editable: chains,
        isFetching: false,
      }
    }
    default:
      return state
  }
};

export default chainsListReducer
