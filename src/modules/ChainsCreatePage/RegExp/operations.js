import axios from 'axios';
import {BACKEND_URL} from "../../../constants/endpoints";
import {getToken} from '../../../globalFunc';
import actions from './actions'
import {showError} from "../../common_api";
import Actions from "./actions";


export const validateForm = (regExp) => (dispatch) => {
  let errorMessage = '';
  let re = require('regex-regex');
  if (re.test(regExp) === false) {
    if (regExp !== '') errorMessage = "Регулярное выражение некорректно"
  }
  dispatch(Actions.dataValidated(errorMessage))
};

export default {
  validateForm,
}
