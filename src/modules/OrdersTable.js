import {BACKEND_URL} from "../constants/endpoints";
import {error} from "react-notification-system-redux";
import axios from 'axios';
import {getToken, isObjectEmpty, setCurrentUser} from '../globalFunc';

const GET_ORDER_DATA_CSV = "GET_ORDER_DATA_CSV"


export const getOrderDataCSV = (id_order) => ({
  type: GET_ORDER_DATA_CSV,
  id_order
})

export const getOrderCSV = (id_order) => (dispatch) => {
  const url = `${BACKEND_URL}/objects/${id_order}/csv`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    console.log(response.data)
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
}
