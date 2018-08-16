import types from './types'

const initialState = {
  request: {},
};

const filterSidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FILTER_REQUEST: {
      let new_request = {...state.request};
      const part = action.request;
      Object.keys(part).forEach(key => {
        if (part[key] === null || part[key].length === 0) {
          const {[key]: value, ...withoutKey} = new_request;
          new_request = withoutKey}
        else  {
          new_request[key] = part[key]
        }});
      return {
        ...state,
        request: new_request}
    }
    case types.GET_START_FILTER_REQUEST: {
      return {
        ...state,
        request: action.request}
    }
    default:
      return state
  }
};

export default filterSidebarReducer
