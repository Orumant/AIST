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

export const validateTestsByStands  = (tests)  => {
  let uniqueStands = [];
  tests.map((test)=> test ? test.stands.map(
    (stand) => uniqueStands.indexOf(stand) === -1 ? uniqueStands.push(stand) : null
  ) : null);
  const stands = uniqueStands.filter((stand) => tests.every((test) => test? test.stands.indexOf(stand) !== -1 : false));
  return stands.length === 0 && tests.length > 0
};

export default {
  fetchFilterTests,
  validateTestsByStands,
}
