import axios from 'axios';
import {BACKEND_URL} from "../constants/endpoints";
import {error} from "react-notification-system-redux";
import {getToken} from '../globalFunc';

const TAGS_FETCH_SUCCEED = 'TAGS_FETCH_SUCCEED';
const TAGS_FETCH_FAILED = 'TAGS_FETCH_FAILED';

export const tagsFetchSucceed = (tags) => ({
  type: TAGS_FETCH_SUCCEED,
  tags,
});

// export const tagsFetchFailed = () => ({
//   type: TAGS_FETCH_FAILED,
// });


export const fetchTags = (test_id) => (dispatch) => {
  const url = `${BACKEND_URL}/tests/${test_id}`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(tagsFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(error({message: "Произошла ошибка!" + response}));
  });
};


const initialState = {
  tags: [],
};

const testTagsPopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAGS_FETCH_SUCCEED: {
      return {
        ...state,
        tags: action.tags,
      }
    }
    default:
      return state
  }
};

export default testTagsPopupReducer
