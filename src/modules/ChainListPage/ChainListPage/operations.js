import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {error} from "react-notification-system-redux";
import {getToken} from '../../../globalFunc';
import actions from './actions'

const fetchChains = (request) => (dispatch) => {
  const url = `${BACKEND_URL}/chain_templates/filter`;
  console.log(request)
  const header = {headers: {SessionID: getToken()}};
  dispatch(actions.startFetching());
  axios.post(url, request, header).then(function (response) {
    console.log(response.data)
    dispatch(actions.chainsFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(actions.endFetching());
    dispatch(error({message: "Произошла ошибка!" + response}));
  });
};

export default {
  fetchChains,
}
