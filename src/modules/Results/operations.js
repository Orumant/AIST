import axios from 'axios';
import {BACKEND_URL} from "../../constants/endpoints";
import {error} from "react-notification-system-redux";
import {getToken} from '../../globalFunc';
import actions from './actions'

export const updateRequestAndOrders = (part, request_old) => (dispatch, getState) => {
  const request = dispatch(updateRequestBody(part, request_old));
  dispatch(fetchOrders(request))
};

const updateRequestBody = (part, request) => (dispatch) => {
  Object.keys(part).map(key => {
    if (part[key] === null || part[key].length == 0) {
      const {[key]: value, ...withoutKey} = request;
      request = withoutKey}
    else  {
      request[key] = part[key]
    }});
  dispatch(actions.updateRequest(request));
  return request;
};

export const fetchChainsTests = () => (dispatch, getState) => {
  const urlChains = `${BACKEND_URL}/chain_templates`;
  const urlTests = `${BACKEND_URL}/tests`;
  const header = {headers: {SessionID : getToken()}};
  axios.get(urlChains,header).then(function (response) {
    dispatch(actions.fetchFiltersChains(response.data))
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
  axios.get(urlTests,header).then(function (response) {
    dispatch(actions.fetchFiltersTests(response.data))
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};

export const fetchOrders = (request) => (dispatch) => {
  const url = `${BACKEND_URL}/orders/filter`;
  const header = {headers: {SessionID: getToken()}};
  axios.post(url, request, header).then(function (response) {
    dispatch(actions.ordersFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};

export default {
  updateRequestAndOrders,
  fetchOrders,
}
