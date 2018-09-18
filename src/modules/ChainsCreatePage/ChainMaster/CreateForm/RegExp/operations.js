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
