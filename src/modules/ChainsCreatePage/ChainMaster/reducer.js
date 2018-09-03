import types from './types'

const initialState = {
  chain_data: {},
  dataAll: {
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
        dataAll: {
          templates: action.templatesAll,
          tests: action.testsAll,
          groups: action.groupsAll,
        },
        isFetching: false,
      }
    }
    case types.CHAIN_DATA_UPDATED: {
      let new_chain_data = {...state.chain_data};
      // console.log(new_chain_data)
      // console.log(action.chain_data)
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
