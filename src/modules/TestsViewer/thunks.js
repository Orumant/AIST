import axios from 'axios';
import actions from './actions';
import {BACKEND_URL} from '../../constants/endpoints';
import {getToken} from "../../globalFunc";
import {showError} from "../common_api";

const header = {headers: {SessionID: getToken()}};
const tests = `${BACKEND_URL}/tests`;
const testsFilter = `${BACKEND_URL}/tests/filter`;

const fetchTestsViewerTests = () => async (dispatch) => {
  dispatch(actions.dataLoadingStarted());
  try {
    let response = await axios.get(tests, header);
    dispatch(actions.fetchSucceed(response.data));
  } catch (response) {
    dispatch(showError(response));
    dispatch(actions.dataLoadingEnded());
  }
};

const filterTests = (request) => async (dispatch) => {
  dispatch(actions.dataLoadingStarted());
  try {
    let response = await axios.post(testsFilter, request, header);
    dispatch(actions.fetchSucceed(response.data));
  } catch (response) {
    dispatch(showError(response));
    dispatch(actions.dataLoadingEnded());
  }
};

export default {
  fetchTestsViewerTests,
  filterTests,
}
