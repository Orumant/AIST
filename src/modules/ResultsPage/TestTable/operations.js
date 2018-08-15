import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {error, success} from "react-notification-system-redux";
// import {getToken} from '../../../globalFunc';
import actions from './actions'
import {getToken} from "../../../globalFunc";


export const fetchOrderDetails = (id_order) => (dispatch) => {
  const url = `${BACKEND_URL}/orders/${id_order}`;
  //TODO: вернуть если пофиксить авторизацию
  // const header = {headers: {SessionID: getToken()}};
  axios.get(url).then(response => {
    dispatch(actions.orderDetailsFetchSucceed(response.data));
  }).catch(response => {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};

export const restartChain = (id_order) => (dispatch) => {
  const url = `${BACKEND_URL}/orders/${id_order}/restartChain`;
  const header = {headers: {SessionID: getToken()}};
  axios.post(url, header).then(() => {
    dispatch(success({message: "Тест успешно перезапущен"}));
  }).catch(response => {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};

export default {
  fetchOrderDetails,
  restartChain,
}
