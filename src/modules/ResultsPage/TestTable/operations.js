import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import actions from './actions'
import { success } from "react-notification-system-redux";
import {getToken} from '../../../globalFunc';
import {showError} from "../../common_api";


export const fetchOrderDetails = (id_order) => (dispatch) => {
  const url = `${BACKEND_URL}/orders/${id_order}`;
  //TODO: вернуть если пофиксить авторизацию
  // const header = {headers: {SessionID: getToken()}};
  axios.get(url).then(response => {
    dispatch(actions.orderDetailsFetchSucceed(response.data));
  }).catch(response => {
    dispatch(showError(response));
  });
};

export const restartChain = (id_order) => (dispatch) => {
  const url = `${BACKEND_URL}/orders/${id_order}/restartChain`;
  const header = {headers: {SessionID: getToken()}};
  axios.post(url, header).then(() => {
    dispatch(success({message: "Тест успешно перезапущен"}));
  }).catch(response => {
    dispatch(showError(response));
  });
};

export default {
  fetchOrderDetails,
  restartChain,
}
