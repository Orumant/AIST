import {BACKEND_URL} from "../../constants/endpoints";
import {error, success} from "react-notification-system-redux";
import axios from 'axios';
import {getToken} from '../../globalFunc';
import {fetchOrders} from "./DataDirectoryTest";

const GET_ORDER_DATA_JSON = "GET_ORDER_DATA_JSON"


export const getOrderDataJSON = (order_data) => ({
  type: GET_ORDER_DATA_JSON,
  order_data
});

export const getOrderJSON = (id_order) => (dispatch) => {
  const url = `${BACKEND_URL}/objects/${id_order}`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(getOrderDataJSON(response.data))
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


const initialState = {
  order_data: {},
};

const ordersTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_DATA_JSON: {
      return {
        ...state,
        order_data: action.order_data}
    }
    default:
      return state
  }
};

export default ordersTableReducer
