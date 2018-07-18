import axios from 'axios';
import {BACKEND_URL} from "../../constants/endpoints";
import {error} from "react-notification-system-redux";
import {getToken} from '../../globalFunc';
import {getChainTests} from "../../utils/filters/index";

const FILTER_CHAINS_FETCH_SUCCEED = 'FILTER_CHAINS_FETCH_SUCCEED';
const TESTS_FETCH_SUCCEED = 'TESTS_FETCH_SUCCEED';
const DATA_FETCH_SUCCEED = 'DATA_FETCH_SUCCEED';

export const chainsFetchSucceed = (chains) => ({
  type: FILTER_CHAINS_FETCH_SUCCEED,
  chains,
});

export const testsFetchSucceed = (tests) => ({
  type: TESTS_FETCH_SUCCEED,
  tests,
});

export const dataFetchSucceed = (data) => ({
  type: DATA_FETCH_SUCCEED,
  data,
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
  let chains = [];
  let tests = [];
  Promise.all([
      axios.post(urlChains, request, header).then((response) =>  {
        chains = response.data
        dispatch(chainsFetchSucceed(response.data))
      }).catch((response) => {
        dispatch(error({message: "Fetch failed with error!" + response}));
      }),
      axios.get(urlTests,header).then((response) => {
        tests = response.data
        dispatch(testsFetchSucceed(response.data))
      }).catch((response) => {
        dispatch(error({message: "Fetch failed with error!" + response}));
      }),
    ]
  ).then( () => {
  const data = chains.map(chain => getChainTests(chain, tests));
  dispatch(dataFetchSucceed(data))}
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
    case DATA_FETCH_SUCCEED: {
      return {
        ...state,
        data: action.data
      }
    }
    default:
      return state
  }
};

export default chainsTableReducer
