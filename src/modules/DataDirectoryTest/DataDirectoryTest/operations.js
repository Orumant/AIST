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

const showPopup = (dispatch) => {
  if (isFirstChange) {
    dispatch(info(infoPopup(dispatch)));
    isFirstChange = false;
  }
};


export const fetchOrders = (request) => (dispatch) => {
  const url = `${BACKEND_URL}/orders/filter`;
  const header = {headers: {SessionID: getToken()}};
  // dispatch(showPopup);
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
