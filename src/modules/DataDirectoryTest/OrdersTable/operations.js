import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {error, success} from "react-notification-system-redux";
import {getToken} from '../../../globalFunc';
import actions from "./actions";
import {fetchOrders} from "../DataDirectoryTest/operations";
import {Actions} from "../DataDirectoryTest";


export const getOrderJSON = (id_order) => (dispatch) => {
  const url = `${BACKEND_URL}/objects/${id_order}`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(actions.getOrderDataJSON(response.data))
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};

export const lockOrder = (id_order) => (dispatch, getState) => {
  const header = {headers: {SessionID: getToken()}};
  const url = `${BACKEND_URL}/orders/${id_order}/lock`;
  axios.post(url, header).then(function (response) {
    dispatch(success({message: "Запись успешно заблокирована!"}));
    dispatch(Actions.excludeOrder(id_order))
  }).catch(function (response) {
    dispatch(error({message: "Произошла ошибка!" + response}));
  });
};

export const unlockOrder = (id_order) => (dispatch, getState) => {
  const header = {headers: {SessionID: getToken()}};
  const url = `${BACKEND_URL}/orders/${id_order}/unlock`;
  axios.post(url, header).then(function (response) {
    dispatch(success({message: "Запись успешно разблокирована!"}));
    dispatch(Actions.excludeOrder(id_order))
  }).catch(function (response) {
    dispatch(error({message: "Произошла ошибка!" + response}));
  });
};

export default {
  getOrderJSON,
  lockOrder,
  unlockOrder,
}
