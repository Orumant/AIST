import axios from 'axios';
import {BACKEND_URL} from "../constants/endpoints";
import {error} from "react-notification-system-redux";
import {getToken} from '../globalFunc';

const ORDERS_FETCH_SUCCEED = 'ORDERS_FETCH_SUCCEED';
const CREATE_REQUEST = "CREATE_REQUEST";
const UPDATE_REQUEST = "UPDATE_REQUEST";

export const ordersFetchSucceed = (payload) => ({
  type: ORDERS_FETCH_SUCCEED,
  payload,
});

export const createRequest = (request) => ({
  type: CREATE_REQUEST,
  request
})

export const updateRequest = (request) => ({
  type: UPDATE_REQUEST,
  request
})

// export updateRequestAndOrders = (request) => (dispatch) => {
//       dispatch(createRequest(request));
//       dispatch(fetchOrders())
// }


export const fetchOrders = (requestBody) => (dispatch, getState) => {
  const url = `${BACKEND_URL}/orders/filter`;
  const header = {headers: {SessionID: getToken()}};
  axios.post(url, requestBody, header).then(function (response) {
    console.log(response.data)
    dispatch(ordersFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};

export const updateRequestAndOrders = (part, request) => (dispatch, getState) => {
  Object.keys(part).map(key => request[key] = part[key]);
  dispatch(updateRequest(request))
  const url = `${BACKEND_URL}/orders/filter`;
  const header = {headers: {SessionID: getToken()}};
  axios.post(url, request, header).then(function (response) {
    console.log(response.data)
    dispatch(ordersFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};



const initialState = {
  data: [],
  request: {},
  isRequestModified: false,
};

const dataDirectoryTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS_FETCH_SUCCEED: {
      return {
        ...state,
        data: action.payload,
        isRequestModified: false,
      }
    }
    case UPDATE_REQUEST: {
      return {
        ...state,
        request: action.request
      }
    }
    case CREATE_REQUEST: {
      let request = {...state.request};
      // request = addObjectToObject(action.request, request)
      Object.keys(action.request).map(key => request[key] = action.request[key]);
      return {
        ...state,
        request,
        isRequestModified: true
      }
    }
    default:
      return state
  }
};

export default dataDirectoryTestReducer
