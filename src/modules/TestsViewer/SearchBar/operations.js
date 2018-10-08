import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {getToken} from '../../../globalFunc';
import actions from './actions'
import {showError} from "../../common_api";

export const fetchTests = () => (dispatch) => {
  const urlTests = `${BACKEND_URL}/tests`;
  const header = {headers: {SessionID : getToken()}};
  axios.get(urlTests,header).then(function (response) {
    dispatch(actions.fetchFiltersTests(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

export default {
  fetchTests,
}
