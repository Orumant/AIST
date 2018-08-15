import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {error, info} from "react-notification-system-redux";
import {getToken} from '../../../globalFunc';
import Notifications from "react-notification-system-redux";
import actions from './actions'

let isFirstChange = true;

const infoPopup = (dispatch) => ({
  title: 'Не нашли что искали?',
  message: 'В таблице отображаются только успешно прошедшие тесты. Вы можете запустить нужную цепочку',
  position: 'bl',
  autoDismiss: 0,
  action: {
    label: 'Здесь',
    callback: () => {window.open("#/launcher", "_self"); dispatch(Notifications.removeAll())},
  }
})


export const updateRequestAndOrders = (part, request_old) => (dispatch, getState) => {
  if (isFirstChange && Object.keys(request_old).length > 0) {
    dispatch(info(infoPopup(dispatch)));
    isFirstChange = false;
  }
  const request = dispatch(updateRequestBody(part, request_old));
  dispatch(fetchOrders(request))
};

const updateRequestBody = (part, request) => (dispatch) => {
  Object.keys(part).forEach(key => {
    if (part[key] === null || part[key].length === 0) {
      const {[key]: value, ...withoutKey} = request;
      request = withoutKey}
    else  {
      request[key] = part[key]
    }});
  dispatch(actions.updateRequest(request));
  return request;
};

const showPopup = (dispatch) => {
  if (isFirstChange) {
    dispatch(info(infoPopup(dispatch)));
    isFirstChange = false;
  }
};


export const fetchOrders = (request) => (dispatch) => {
  const url = `${BACKEND_URL}/orders/filter`;
  const header = {headers: {SessionID: getToken()}};
  dispatch(showPopup);
  dispatch(actions.startFetching())
  axios.post(url, request, header).then(function (response) {
    dispatch(actions.ordersFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(actions.endFetching())
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};

export default {
  fetchOrders,
}
