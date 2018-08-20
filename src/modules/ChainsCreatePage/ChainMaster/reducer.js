import types from './types'

const initialState = {
  chain_data: {},
  templatesAll: [],
  testsAll: [],
  groupsAll: [],
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
        templatesAll: action.templatesAll,
        testsAll: action.testsAll,
        groupsAll: action.groupsAll,
        isFetching: false,
      }
    }
    case types.CHAIN_DATA_UPDATED: {
      let new_chain_data = {...state.chain_data};
      Object.keys(action.chain_data).forEach(prop => new_chain_data[prop] = action.chain_data[prop])
      return {
        ...state,
        chain_data: new_chain_data,
      }
    }
    default:
      return state
  }
};

export default chainMasterReducer
