import types from './types'

const initialState = {
  test_data: {},
  dataAll: {
    as: [],
    stands: [],
  },
  isFetching: false,
};

const testMasterReducer = (state = initialState, action) => {
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
        test_data: action.test_data? action.test_data: {},
        dataAll: {
          as: action.asAll,
          stands: action.standsAll,
        },
        isFetching: false,
      }
    }
    case types.TEST_DATA_UPDATED: {
      let new_test_data = {...state.test_data};
      Object.keys(action.test_data).forEach(prop => new_test_data[prop] = action.test_data[prop]);
      return {
        ...state,
        test_data: new_test_data,
      }
    }
    case types.TEST_ADDED: {
      return {
        ...state,
        test_data: {},
        isFetching: false,
      }
    }
    default:
      return state
  }
};

export default testMasterReducer
