import axios from 'axios';
import {BACKEND_URL} from "../../../../constants/endpoints";
import {getToken} from '../../../../globalFunc';
import actions from './actions'
import {showError} from "../../../common_api";

export const fetchFilterTests = (request) => (dispatch) => {
  const url = `${BACKEND_URL}/tests/filter`;
  const header = {headers: {SessionID: getToken()}};
  dispatch(actions.startFetching());
  axios.post(url, request, header)
  .then(response =>
    dispatch(actions.filterTestFetchSucceed(response.data)))
  .catch(response => {
    dispatch(actions.endFetching());
    dispatch(showError(response));
  });
};

export default {
  fetchFilterTests,
}
