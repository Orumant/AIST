import {BACKEND_URL} from "../constants/endpoints";
import {error} from "react-notification-system-redux";
import axios from 'axios';
import {getToken, isObjectEmpty, setCurrentUser} from '../globalFunc';


const FETCH_FILTERS_CHAINS = 'FETCH_FILTERS_CHAINS';
const FETCH_FILTERS_TESTS = 'FETCH_FILTERS_TESTS';

export const fetchFiltersChains = (chains) => ({
  type: FETCH_FILTERS_CHAINS,
  chains,
})

export const fetchFiltersTests = (tests) => ({
  type: FETCH_FILTERS_TESTS,
  tests,
})

/**
 * Chain builder page
 * fetching data from database
 */
export const fetchChainsTests = () => (dispatch, getState) => {
  const urlChains = `${BACKEND_URL}/chain_templates`;
  const urlTests = `${BACKEND_URL}/tests`;
  const header = {headers: {SessionID : getToken()}};
  Promise.all([
      axios.get(urlChains,header).then(function (response) {
        dispatch(fetchFiltersChains(response.data))
      }).catch(function (response) {
        dispatch(error({message: "Fetch failed with error!" + response}));
      }),
      axios.get(urlTests,header).then(function (response) {
        dispatch(fetchFiltersTests(response.data))
      }).catch(function (response) {
        dispatch(error({message: "Fetch failed with error!" + response}));
      }),
    ]
  )
};

const initialState = {
  chains: [],
  tests: [],
};

const filterChainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILTERS_CHAINS: {
      return {
        ...state,
        chains: action.chains}
    }
    case FETCH_FILTERS_TESTS: {
      return {
        ...state,
        tests: action.tests}
    }
    default:
      return state
  }
};

export default filterChainReducer
