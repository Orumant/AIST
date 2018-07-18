
const STATE_CHANGED = 'STATE_CHANGED';

export const stateChanged = (show) => ({
  type: STATE_CHANGED,
  show,
});

const initialState = {
  show: false,
};

const chainsTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATE_CHANGED: {
      return {
        ...state,
        show: action.show,
      }
    }
    default:
      return state
  }
};

export default chainsTableReducer
