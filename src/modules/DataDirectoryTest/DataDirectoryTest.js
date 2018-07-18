import axios from 'axios';
import {BACKEND_URL} from "../../constants/endpoints";
import {error, info} from "react-notification-system-redux";
import {getToken} from '../../globalFunc';
import * as Notifications from "react-notification-system-redux";

const ORDERS_FETCH_SUCCEED = 'ORDERS_FETCH_SUCCEED';
const UPDATE_REQUEST = "UPDATE_REQUEST";

let isFirstChange = true;

export const ordersFetchSucceed = (payload) => ({
  type: ORDERS_FETCH_SUCCEED,
  payload,
});

export const updateRequest = (request) => ({
  type: UPDATE_REQUEST,
  request
});

const infoPopup = (clearPopups) => ({
  title: 'Не нашли что искали?',
  message: 'В таблице отображаются только успешно прошедшие тесты. Вы можете запустить нужную цепочку',
  position: 'bl',
  autoDismiss: 0,
  action: {
    label: 'Здесь',
    callback: () => {window.open("#/launcher", "_self"); clearPopups()},
  }
})


export const updateRequestAndOrders = (part, request_old) => (dispatch, getState) => {
  if (isFirstChange && Object.keys(request_old).length > 0) {
    dispatch(info(infoPopup(Notifications.removeAll())));
    isFirstChange = false;
  }
  const request = dispatch(updateRequestBody(part, request_old));
  dispatch(fetchOrders(request))
};

const updateRequestBody = (part, request) => (dispatch) => {
  Object.keys(part).map(key => {
    if (part[key] === null || part[key].length == 0) {
      const {[key]: value, ...withoutKey} = request;
      request = withoutKey}
    else  {
        request[key] = part[key]
  }});
  dispatch(updateRequest(request));
  return request;
};


export const fetchOrders = (request) => (dispatch) => {
  const url = `${BACKEND_URL}/orders/filter`;
  const header = {headers: {SessionID: getToken()}};
  axios.post(url, request, header).then(function (response) {
    dispatch(ordersFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};


const initialState = {
  data: [],
  request: {},
};

const dataDirectoryTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS_FETCH_SUCCEED: {
      return {
        ...state,
        data: action.payload,
      }
    }
    case UPDATE_REQUEST: {
      return {
        ...state,
        request: action.request
      }
    }
    default:
      return state
  }
};

export default dataDirectoryTestReducer
