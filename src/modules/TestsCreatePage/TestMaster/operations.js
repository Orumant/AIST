import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {getToken} from '../../../globalFunc';
import actions from './actions'
import {showError} from "../../common_api";

export const fetchAllData = (test_id) => (dispatch) => {
  const urlTest= `${BACKEND_URL}/tests/${test_id}`;
  const urlStands = `${BACKEND_URL}/dictionaries/stands`;
  const urlAs = `${BACKEND_URL}/dictionaries/systems`;
  const header = {headers: {SessionID: getToken()}};
  dispatch(actions.startFetching());
  Promise.all([
    axios.get(urlAs, header),
    axios.get(urlStands, header),
    test_id ? axios.get(urlTest, header) : null,
  ])
    .then(([as, stands, test_data]) =>{
      dispatch(actions.dataFetchSucceed(as.data, stands.data, test_data? test_data.data[0]: null));})
    .catch(response => {
      dispatch(actions.endFetching());
      dispatch(showError(response));
    });
};

const dataToRequest = (test_data) => {
  return [test_data]
};

export const submitNewTestData = (test_data, history) => (dispatch) => {
  const url = `${BACKEND_URL}/tests`;
  const header = {headers: {SessionID: getToken()}};
  dispatch(actions.startFetching());
  const data = dataToRequest(test_data);
  axios.put(url, data, header)
    .then(() => {
      history.push('/success_test');
      dispatch(actions.testAdded())
    })
    .catch(response => {
      dispatch(actions.endFetching());
      dispatch(showError(response));
    });
};

export const submitEditedTestData = (test_id, test_data, history) => (dispatch) => {
  const url = `${BACKEND_URL}/tests/${test_id}`;
  const header = {headers: {SessionID: getToken()}};
  dispatch(actions.startFetching());
  const data = dataToRequest(test_data);
  axios.post(url, data, header)
    .then(() => {
      history.push('/success_test');
      dispatch(actions.testAdded())
    })
    .catch(response => {
      dispatch(actions.endFetching());
      dispatch(showError(response));
    });
};

export default {
  fetchAllData,
  submitNewTestData,
  submitEditedTestData,
}
