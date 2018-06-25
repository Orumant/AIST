import {BROWSER_ALERT_POPUP, BROWSER_ALERT_POPUP_CLOSED} from "../constants";


const initialState = {
  notifications: [],
};

const browserAlert = (state = initialState, action) => {
  switch (action.type){
    case BROWSER_ALERT_POPUP:
    {
      return { ...state,
        notifications: action.notification }
    }
    default: return {state,
      notifications: initialState.notifications}
  }
};

export default browserAlert
