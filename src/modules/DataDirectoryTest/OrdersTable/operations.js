import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {error, success} from "react-notification-system-redux";
import {getToken} from '../../../globalFunc';
import actions from "./actions";
import {fetchOrders} from "../DataDirectoryTest/operations";


export const getOrderJSON = (id_order) => (dispatch) => {
  const url = `${BACKEND_URL}/objects/${id_order}`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(actions.getOrderDataJSON(response.data))
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};

export const lockOrder = (orderId, request) => (dispatch, getState) => {
  const header = {headers: {SessionID: getToken()}};
  const url = `${BACKEND_URL}/orders/${orderId}/lock`;

  axios.post(url, header).then(function (response) {
    dispatch(success({message: "Запись успешно заблокирована!"}));
    dispatch(fetchOrders(request))
  }).catch(function (response) {
    dispatch(error({message: "Произошла ошибка!" + response}));
  });
};

export const unlockOrder = (orderId, request) => (dispatch, getState) => {
  const header = {headers: {SessionID: getToken()}};
  const url = `${BACKEND_URL}/orders/${orderId}/unlock`;
  axios.post(url, header).then(function (response) {
    dispatch(success({message: "Запись успешно разблокирована!"}));
    dispatch(fetchOrders(request))
  }).catch(function (response) {
    dispatch(error({message: "Произошла ошибка!" + response}));
  });
};
