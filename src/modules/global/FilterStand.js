import {BACKEND_URL} from "../../constants/endpoints";
import {error} from "react-notification-system-redux";
import axios from 'axios';
import {getToken} from '../../globalFunc';

const GET_ALL_STANDS = "GET_ALL_STANDS"


export const getStands = (stands) => ({
  type: GET_ALL_STANDS,
  stands
});

export const getAllStands = () => (dispatch) => {
  const url = `${BACKEND_URL}/stands`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(getStands(response.data))
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
};

const initialState = {
  stands: [],
};

const filterStandReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STANDS: {
      return {
        ...state,
        stands: action.stands}
    }
    default:
      return state
  }
};

export default filterStandReducer
