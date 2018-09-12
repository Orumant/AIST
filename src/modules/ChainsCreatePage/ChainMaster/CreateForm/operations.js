import Actions from "./actions";

// TODO: сделать валидацию попроще ._.
const validateRegExp = (index, regExp, errors) => {
  let re = require('regex-regex');
  if (re.test(regExp) === false) {
    if (regExp) errors[index] = updateMessage(errors[index], "regEx", "Регулярное выражение некорректно");
  }
  return errors;
};

const validateLabel = (index, label, errors) => {
  if (label === '') errors[index] = updateMessage(errors[index], "label", "Имя поля не может быть пустым");
  return errors
};

const validateParam = (index, form, errors) => {
  const param = form[index].paramName;
  if (param === '') {
    errors[index] = updateMessage(errors[index], "paramName", "Имя параметра не может быть пустым");
    return errors
  }
  const indexes = [];
  form.forEach((field, ind) => field.paramName === param ? indexes.push(ind) : null);
  if (indexes.length > 1) errors[index] = updateMessage(errors[index], "paramName", "Имя параметра повторяется");
  return errors
};

const updateMessage = (messages, name, res) => {
  if (!messages) messages = {};
  messages[name] = res;
  return messages;
};

export const validateForm = (form, callback) => (dispatch) => {
  let errorMessage = {};
  form.forEach((field, ind) => {
    errorMessage = validateLabel(ind, field.label, errorMessage);
    errorMessage = validateParam(ind, form, errorMessage);
    errorMessage = validateRegExp(ind, field.regEx, errorMessage);
  });
  dispatch(Actions.dataValidated(errorMessage));
  if (Object.keys(errorMessage).length === 0) callback();
};

export default {
  validateForm,
}
