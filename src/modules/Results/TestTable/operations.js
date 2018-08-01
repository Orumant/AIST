import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {error} from "react-notification-system-redux";
import {getToken} from '../../../globalFunc';
import actions from './actions'


export const fetchOrderDetails = (id_order) => (dispatch) => {
  const url = `${BACKEND_URL}/orders/${id_order}`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url).then(response => {
    dispatch(actions.orderDetailsFetchSucceed(response.data));
  }).catch(response => {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};

export default {
  fetchOrderDetails,
}
