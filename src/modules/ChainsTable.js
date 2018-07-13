import axios from 'axios';
import {BACKEND_URL} from "../constants/endpoints";
import {error} from "react-notification-system-redux";
import {getToken} from '../globalFunc';

const FILTER_CHAINS_FETCH_SUCCEED = 'FILTER_CHAINS_FETCH_SUCCEED';
const TESTS_FETCH_SUCCEED = 'TESTS_FETCH_SUCCEED';

export const chainsFetchSucceed = (chains) => ({
  type: FILTER_CHAINS_FETCH_SUCCEED,
  chains,
});

export const testsFetchSucceed = (tests) => ({
  type: TESTS_FETCH_SUCCEED,
  tests,
});


/**
 * Chain builder page
 * fetching data from database
 */
export const fetchChainsTestsByMarker = (marker) => (dispatch, getState) => {
  const urlChains = `${BACKEND_URL}/chain_templates/filter`;
  const urlTests = `${BACKEND_URL}/tests`;
  const header = {headers: {SessionID : getToken()}};
  const request = {marker: marker}
  Promise.all([
      axios.post(urlChains, request, header).then((response) =>  {
        dispatch(chainsFetchSucceed(response.data))
      }).catch((response) => {
        dispatch(error({message: "Fetch failed with error!" + response}));
      }),
      axios.get(urlTests,header).then((response) => {
        dispatch(testsFetchSucceed(response.data))
      }).catch((response) => {
        dispatch(error({message: "Fetch failed with error!" + response}));
      }),
    ]
  )
};


const initialState = {
  chains: [],
  tests: [],
};

const chainsTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHAINS_FETCH_SUCCEED: {
      return {
        ...state,
        chains: action.chains,
      }
    }
    case TESTS_FETCH_SUCCEED: {
      return {
        ...state,
        tests: action.tests
      }
    }
    default:
      return state
  }
};

export default chainsTableReducer
