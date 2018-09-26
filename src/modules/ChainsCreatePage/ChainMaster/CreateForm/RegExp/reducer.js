import types from './types'

const initialState = {
  error: false,
  errorMessage: '',
};

const regExpReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_VALIDATED: {
      let error = false;
      if (action.errorMessage) error = true;
      return {
        ...state,
        error,
        errorMessage: action.errorMessage,
      }
    }
    default:
      return state
  }
};

export default regExpReducer
