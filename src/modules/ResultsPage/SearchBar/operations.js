import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {error} from "react-notification-system-redux";
import {getToken} from '../../../globalFunc';
import actions from './actions'
import {showError} from "../../common_api";


//TODO: Очень много копипасты, имеет ли смысл сливать все модули в один универсальный?
export const fetchChainsTests = () => (dispatch, getState) => {
  const urlChains = `${BACKEND_URL}/chain_templates`;
  const urlTests = `${BACKEND_URL}/tests`;
  const header = {headers: {SessionID : getToken()}};
  axios.get(urlChains,header).then(function (response) {
    dispatch(actions.fetchFiltersChains(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
  axios.get(urlTests,header).then(function (response) {
    dispatch(actions.fetchFiltersTests(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

export default {
  fetchChainsTests,
}
