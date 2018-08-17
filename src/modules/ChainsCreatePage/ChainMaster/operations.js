import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {getToken} from '../../../globalFunc';
import actions from './actions'
import {showError} from "../../common_api";

export const fetchAllData = () => (dispatch) => {
  const urlTests = `${BACKEND_URL}/tests`;
  const urlTemplates = `${BACKEND_URL}/chain_templates`;
  const urlGroups = `${BACKEND_URL}/owners/personal/getGroups`;
  const header = {headers: {SessionID: getToken()}};
  dispatch(actions.startFetching());
  Promise.all([
    axios.get(urlTemplates, header),
    axios.get(urlTests, header),
    axios.get(urlGroups, header),
  ])
    .then(([templates, tests, groups]) => dispatch(actions.dataFetchSucceed(templates.data, tests.data, groups.data)))
    .catch(response => {
      dispatch(actions.endFetching());
      dispatch(showError(response));
  });
};

export default {
  fetchAllData,
}
