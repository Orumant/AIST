import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {getToken} from '../../../globalFunc';
import actions from './actions'
import {showError} from "../../common_api";

export const fetchAllData = (chain_id) => (dispatch) => {
  const urlChain = `${BACKEND_URL}/chain_templates/${chain_id}`;
  const urlTests = `${BACKEND_URL}/tests`;
  const urlTemplates = `${BACKEND_URL}/chain_templates`;
  const urlGroups = `${BACKEND_URL}/owners/personal/getGroups`;
  const header = {headers: {SessionID: getToken()}};
  dispatch(actions.startFetching());
  Promise.all([
    axios.get(urlTemplates, header),
    axios.get(urlTests, header),
    axios.get(urlGroups, header),
    chain_id ? axios.get(urlChain, header) : null,
  ])
    .then(([templates, tests, groups, chain_data]) =>
      dispatch(actions.dataFetchSucceed(templates.data, tests.data, groups.data, chain_data? chain_data.data: null)))
    .catch(response => {
      dispatch(actions.endFetching());
      dispatch(showError(response));
    });
};

const dataToRequest = (chain_data) => {
  let data = {};
  for (let field in chain_data) {
    if (chain_data[field] && chain_data[field].length > 0)
      if (field === "tests") data[field] = chain_data[field].map(test => test.test_id);
      else data[field] = chain_data[field];
  }
  return [data]
};

export const submitNewChainData = (chain_data, history) => (dispatch) => {
  const url = `${BACKEND_URL}/chain_templates`;
  const header = {headers: {SessionID: getToken()}};
  dispatch(actions.startFetching());
  const data = dataToRequest(chain_data);
  axios.put(url, data, header)
    .then(() => {
      history.push('/success_chains');
      dispatch(actions.chainAdded())
    })
    .catch(response => {
      dispatch(actions.endFetching());
      dispatch(showError(response));
    });
};

export const submitEditedChainData = (chain_id, chain_data, history) => (dispatch) => {
  const url = `${BACKEND_URL}/chain_templates/${chain_id}`;
  const header = {headers: {SessionID: getToken()}};
  dispatch(actions.startFetching());
  const data = dataToRequest(chain_data);
  axios.post(url, data, header)
    .then(() => {
      history.push('/success_chains');
      dispatch(actions.chainAdded())
    })
    .catch(response => {
      dispatch(actions.endFetching());
      dispatch(showError(response));
    });
};

export default {
  fetchAllData,
  submitNewChainData,
  submitEditedChainData,
}
