import {BACKEND_URL} from "../constants/endpoints";

export const fetchChainsTests = () => (dispatch, getState) => {
  const urlChains = `${BACKEND_URL}/chain_templates`;
  const urlTests = `${BACKEND_URL}/tests`;
  const header = {headers: {SessionID : getToken()}};
  axios.get(urlChains,header).then(function (response) {
    dispatch(fetchFiltersChains(response.data))
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
  axios.get(urlTests,header).then(function (response) {
    dispatch(fetchFiltersTests(response.data))
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  })
};
