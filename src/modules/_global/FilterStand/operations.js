import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {error} from "react-notification-system-redux";
import {getToken} from '../../../globalFunc';
import actions from './actions'
import {showError} from "../../common_api";

export const getAllStands = () => (dispatch) => {
  const url = `${BACKEND_URL}/stands`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(actions.getStands(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

export default {
  getAllStands,
}
