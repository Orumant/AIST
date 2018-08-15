import types from './types'

const initialState = {
  test_details: [],
};

const TestTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ORDER_DETAILS_FETCH_SUCCEED: {
      const {test_details} = state;
      const {id_order, testchain} = action.details;
      const add_details = {...test_details, [id_order]: testchain}
      return {
        ...state,
        test_details: add_details}
    }
    default:
      return state
  }
};

export default TestTableReducer
