import types from './types'

const initialState = {
  stands: [],
};

const filterStandReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_STANDS: {
      return {
        ...state,
        stands: action.stands}
    }
    default:
      return state
  }
};

export default filterStandReducer
