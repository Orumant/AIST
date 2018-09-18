import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
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
  const urlTests = `${BACKEND_URL}/tests`;
  const urlChains = `${BACKEND_URL}/chain_templates/filter`;
  const request = {access: "write"};
  const header = {headers: {SessionID: getToken()}};
  Promise.all([
    axios.get(urlTests, header),
    axios.post(urlChains, request, header)
  ]).then(([tests, chains]) => {
    dispatch(actions.testsFetchSucceed(tests.data, chains.data));
  }).catch(response => {
    dispatch(showError(response));
  });
};

export default {
  fetchChains,
  fetchTestsData,
}
