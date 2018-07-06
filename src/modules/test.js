import axios from 'axios';
import {BACKEND_URL} from "../constants/endpoints";
import {error} from "react-notification-system-redux";
import {getToken, isObjectEmpty, setCurrentUser} from '../globalFunc';

// =============================================== CONSTANTS ===========================================================
const FETCH_FILTERS_TESTS = 'FETCH_FILTERS_TESTS';
const ORDERS_FETCH_SUCCEED = 'ORDERS_FETCH_SUCCEED';


//=============================================== ACTIONS ==============================================================
export const fetchFiltersTests = (tests) => ({
  type: FETCH_FILTERS_TESTS,
  tests,
})

export const ordersFetchSucceed = (payload) => ({
  type: ORDERS_FETCH_SUCCEED,
  payload,
});

// ================================================== API ==============================================================
export const fetchOrders = (url, dispatch)  => {
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    console.log(response.data)
    dispatch(ordersFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};


// =============================================== REDUCER =============================================================
const initialState = {
  data: [],
};

const dataDirectoryTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS_FETCH_SUCCEED: {
      return {
        ...state,
        data: action.payload
      }
    }
    default:
      return state
  }
};

export default dataDirectoryTestReducer
