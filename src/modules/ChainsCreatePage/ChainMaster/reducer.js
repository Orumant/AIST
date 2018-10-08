import types from './types'

const initialState = {
  chain_data: {},
  dataAll: {
    chainsAll: [],
    templates: [],
    tests: [],
    groups: [],
  },
  isFetching: false,
};

const chainMasterReducer = (state = initialState, action) => {
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
    case types.DATA_FETCH_SUCCEED: {
      return {
        ...state,
        chain_data: action.chain_data? action.chain_data: {},
        dataAll: {
          chainsAll: action.chainsAll,
          templates: action.templatesAll,
          tests: action.testsAll,
          groups: action.groupsAll,
        },
        isFetching: false,
      }
    }
    case types.CHAIN_DATA_UPDATED: {
      let new_chain_data = {...state.chain_data};
      Object.keys(action.chain_data).forEach(prop => new_chain_data[prop] = action.chain_data[prop]);
      return {
        ...state,
        chain_data: new_chain_data,
      }
    }
    case types.CHAIN_ADDED: {
      return {
        ...state,
        chain_data: {},
        isFetching: false,
      }
    }
    default:
      return state
  }
};

export default chainMasterReducer
