import axios from 'axios';
import {BACKEND_URL} from "../constants/endpoints";
import {error} from "react-notification-system-redux";
import {getToken} from '../globalFunc';
import {addObjectToObject} from "../utils/filters/index";

const ORDERS_FETCH_SUCCEED = 'ORDERS_FETCH_SUCCEED';
const UPDATE_REQUEST = "UPDATE_REQUEST";

export const ordersFetchSucceed = (payload) => ({
  type: ORDERS_FETCH_SUCCEED,
  payload,
});

export const updateRequest = (request) => ({
  type: UPDATE_REQUEST,
  request
})


export const updateRequestAndOrders = (part, request_old) => (dispatch, getState) => {
  const request = dispatch(updateRequestBody(part, request_old))
  dispatch(fetchOrders(request))

}

const updateRequestBody = (part, request) => (dispatch) => {
  console.log(part, request)
  Object.keys(part).map(key => {
    if (part[key] === null || part[key].length == 0) {
      const {[key]: value, ...withoutKey} = request;
      request = withoutKey}
    else  {
        request[key] = part[key]
  }});
  dispatch(updateRequest(request));
  console.log(request)
  return request;
}


export const fetchOrders = (request) => (dispatch) => {
  const url = `${BACKEND_URL}/orders/filter`;
  const header = {headers: {SessionID: getToken()}};
  axios.post(url, request, header).then(function (response) {
    dispatch(ordersFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
}


const initialState = {
  data: [],
  request: {},
};

const dataDirectoryTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS_FETCH_SUCCEED: {
      return {
        ...state,
        data: action.payload,
      }
    }
    case UPDATE_REQUEST: {
      return {
        ...state,
        request: action.request
      }
    }
    default:
      return state
  }
};

export default dataDirectoryTestReducer
