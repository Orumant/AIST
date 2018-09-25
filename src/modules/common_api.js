import {error} from "react-notification-system-redux";
import {forceLogin, onUserLogOut} from "../globalFunc";

export const showError = (response) => (dispatch) => {
  if (response.response) {
    if(response.response.status === 401) {
      onUserLogOut();
      forceLogin();
    }
    else {
      if(response.response.status === 404 && response.response.data === "Incorrect password")
        dispatch(error({message: "Неверный пароль!"}));
        else dispatch(error({message: "Произошла ошибка! " + response.message}))}}
  else dispatch(error({message: "Произошла ошибка! " + response}))
};
