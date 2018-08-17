import types from './types'

const initialState = {
  templates: [],
  tests: [],
  groups: [],
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
        templates: action.templates,
        tests: action.tests,
        groups: action.groups,
        isFetching: false,
      }
    }
    default:
      return state
  }
};

export default chainMasterReducer
