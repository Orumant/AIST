import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {error} from "react-notification-system-redux";
import {getToken} from '../../../globalFunc';
import actions from './actions'
import {showError} from "../../common_api";

const fetchChains = (request) => (dispatch) => {
  const url = `${BACKEND_URL}/chain_templates/filter`;
  const header = {headers: {SessionID: getToken()}};
  dispatch(actions.startFetching());
  axios.post(url, request, header).then(function (response) {
    dispatch(actions.chainsFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(actions.endFetching());
    dispatch(showError(response));
  });
};

export const fetchTestsData = () => (dispatch) => {
  const url = `${BACKEND_URL}/tests`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(actions.testsFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

export default {
  fetchChains,
  fetchTestsData,
}
