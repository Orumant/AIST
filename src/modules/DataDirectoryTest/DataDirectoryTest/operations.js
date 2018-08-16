import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {error} from "react-notification-system-redux";
import {getToken} from '../../../globalFunc';
import actions from './actions'


export const fetchOrders = (request) => (dispatch) => {
  const url = `${BACKEND_URL}/orders/filter`;
  const header = {headers: {SessionID: getToken()}};
  dispatch(actions.startFetching());
  axios.post(url, request, header).then(function (response) {
    dispatch(actions.ordersFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(actions.endFetching());
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};

export default {
  fetchOrders,
}
