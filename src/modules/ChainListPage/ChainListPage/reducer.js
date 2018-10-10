import types from './types'

const initialState = {
  chains: [],
  chainsOrigin: [],
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
        chainsOrigin: action.chains,
        isFetching: false,
      }
    }
    case types.TESTS_FETCH_SUCCEED: {
      const tests = action.testsAll;
      const chains = action.chains_editable.map(chain => chain.id);
      let testsData = {};
      tests.forEach(test => testsData = {...testsData, [test.test_id]: [test.a_system, test.test_name]});
      return {
        ...state,
        testsAll: testsData,
        chains_editable: chains,
        isFetching: false,
      }
    }
    case types.CHAINS_FILTER_BY_NAME: {
      const chains = [...state.chainsOrigin];
      const filteredChains = action.name.length > 0?
        chains.filter(chain => chain.name.toLowerCase().includes(action.name.toLowerCase())) : chains;
      return {
        ...state,
        chains: filteredChains,
      }
    }

    default:
      return state
  }
};

export default chainsListReducer
