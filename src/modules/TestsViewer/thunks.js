import axios from 'axios';
import actions from './actions';
import {BACKEND_URL} from '../../constants/endpoints';
import {getToken} from "../../globalFunc";
import {showError} from "../common_api";

const header = {headers: {SessionID: getToken()}};

const fetchAllDataNeeded = () => (dispatch) => {
  const tests = `${BACKEND_URL}/tests`;
  const systems = `${BACKEND_URL}/dictionaries/systems`;
  const stands = `${BACKEND_URL}/dictionaries/stands`;
  dispatch(actions.dataLoadingStarted());

  Promise.all([
    axios.get(tests, header),
    axios.get(systems, header),
    axios.get(stands, header),
  ]).then(function (data) {
    dispatch(actions.fetchSucceed(data));
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

export default {
  fetchAllDataNeeded,
}
