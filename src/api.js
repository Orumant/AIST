import {error, success} from "react-notification-system-redux";
import {

  formTemplateFetchSuccseed,
  testsListTemplateFetchSucceed,
  dataTemplateFetchSucceed,
  allChainEditorTemplateFetchSucceed,
  allChainTemplateFetchSucceed,
  dataTemplateFetchFail,
  dataTemplatesFetchSuccess,
  formBuilderChainsFetchSucceed,
  formGroupsFetchSucceed,
  formGroupsForMembersFetchSucceed,
  formTemplateFetchFail,
  getValidationResults,
  launcherUserGroupsFetchSucceed,
  orderCreated,
  ordersCSVFetchFail,
  ordersCSVFetchSucceed,
  ordersFetchSucceed,
  resetModificationMarkers,
  standsFetchSucceed,
  submitChainTemplateSucceed,
  submitRerunOrderSucceed,
  testBuilderTestsFetchSucceed,
  testChainTemplateFetchSucceed,
  testListTestsFetchSucceed,
  updateChainFormSucceed,
  updateDataTemplateSuccess,
} from './actions';
import axios from 'axios';
import {BACKEND_URL} from "./constants/endpoints";
import {getToken, isObjectEmpty, setCurrentUser} from './globalFunc';
import {showError} from "./modules/common_api";


export const fetchOrdersByName = (chainName, dateFrom, dateTo) => (dispatch) => {
  const header = {headers: {SessionID: getToken()}};
  const url = `${BACKEND_URL}/orders/?chainName=${chainName}&start=${dateFrom}&end=${dateTo + ' 23:59:59'}`;

  axios.get(url, header).then(function (response) {
    dispatch(ordersFetchSucceed(response.data));
  }).catch(function (response) {
    //dispatch(ordersFetchFail());
    dispatch(showError(response));
  });
};

// //Перезапуск по ID
export const updateOrderRerun = (orderID) => (dispatch) => {

  const url = `${BACKEND_URL}/objects/${orderID}/restartChain`;

  axios.post(url).then(function () {
    dispatch(success({message: "Успешно сохранено!"}));
    dispatch(submitRerunOrderSucceed());
  }).catch(function (response) {
    dispatch(error({message: "Произошла ошибка при сохранении!" + response}));
  });
};


//Получение CSV по ID
export const getCSVbyOrderID = (orderID) => (dispatch) => {

  const url = `${BACKEND_URL}/objects/${orderID}/csv`;

  axios.get(url).then(function (response) {
    dispatch(ordersCSVFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(ordersCSVFetchFail());
    dispatch(showError(response));
  });
};

/** GET request example
 axios.get(url).then(function (response) {
    dispatch(fetchSuccessFunction(response.data))
  }).catch(function (response) {
    dispatch(error({message: "Fetch failed with error!" + response}));
  });
 */

/** POST request example
 axios.post(url, requestBody).then(function () {
    dispatch(success({message: "Submit succeeded!"}));
  }).catch(function (response) {
    dispatch(error({message: "Submit failed with error!" + response}));
  });
 */

/** PUT request example
 axios.put(url, requestBody).then(function () {
    dispatch(success({message: "Submit succeeded!"}));
  }).catch(function (response) {
    dispatch(error({message: "Submit failed with error!" + response}));
  });
 */

/**
 * Create new getGroups
 */

export const updatePersonalForm = (payload) => (dispatch) => {
  if (payload.groupName === "") {
    dispatch(error({message: "Ошибка: Поле Название группы пустое"}));
    return;
  }
  const url = `${BACKEND_URL}/owners/personal`;
  const header = {headers: {SessionID: getToken()}};
  const requestBody = {groupName: payload.groupName};
  axios.put(url, [requestBody], header).then(function (response) {
    dispatch(success({message: "Группа создана"}));
  }).catch(function (response) {
    dispatch(showError(response));
  });
  payload.groupName = "";

};

/**
 * Validation login and password
 * Public key request for create account
 */

export const getPublicKeyRegistration = (payload, history) => (dispatch) => {
  if (payload.login === "" || payload.password === "" || payload.confirmPassword === "") {
    dispatch(error({message: "Ошибка: Не все поля заполнены"}));
    return;
  }
  if (payload.password !== payload.confirmPassword) {
    dispatch(error({message: "Ошибка: Разные пароли"}));
    return;
  }

  const url = `${BACKEND_URL}/owners/registration`;
  axios.get(url).then(function (response) {
    dispatch(updateRegistrationForm(payload, response.data, history))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

/**
 * Encrypt user Password
 * Using the public key from server
 */

export const encryptPassword = (payload, publicKey) => {
  let a = JSON.stringify(publicKey);
  let RSAKey = require('react-native-rsa');
  let rsa = new RSAKey();
  rsa.setPublicString(a);
  payload.password = rsa.encrypt(payload.password);
};

/**
 * Send login and encrypt password to server
 * If all OK create account
 */

export const updateRegistrationForm = (payload, publicKey, history) => (dispatch) => {
  encryptPassword(payload, publicKey);
  const url = `${BACKEND_URL}/owners/registration`;
  axios.put(url, payload).then(function (response) {
    history.push({pathname: '/', state: {from: 'registration'}});
  }).catch(function (response) {
    dispatch(showError(response));
  });

};
/**
 * Validation login and password
 * Public key request
 */

export const getPublicKeyLogin = (payload, goBack) => (dispatch) => {

  if (payload.login === "" || payload.password === "") {
    dispatch(error({message: "Ошибка: Не все поля заполнены"}));
    return;
  }
  const url = `${BACKEND_URL}/owners/login`;
  axios.get(url).then(function (response) {
    dispatch(updateLoginForm(payload, response.data, goBack))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

/**
 * Send owners and encrypt password to server
 * If all OK go to homepage
 */

export const updateLoginForm = (payload, publicKey, goBack) => (dispatch) => {
  let a = payload.password;
  encryptPassword(payload, publicKey);
  const url = `${BACKEND_URL}/owners/login`;
  axios.post(url, payload).then(function (response) {
    payload.token = response.data.token;
    setCurrentUser(payload.login, response.data);
    goBack();

  }).catch(function (response) {
    payload.password = a;
    dispatch(showError(response));
  });
};

export const fetchDataTemplatesList = () => (dispatch, getState) => {
  const url = `${BACKEND_URL}/templates`;
  const header = {headers: {SessionID: getToken()}};

  axios.get(url).then(function (response) {
    dispatch(dataTemplateFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(dataTemplateFetchFail());
    dispatch(showError(response));
  });
};


export const fetchFormTemplate = (formName) => (dispatch) => {
  const url = `${BACKEND_URL}/forms/${formName}`;

  axios.get(url).then(function (response) {
    dispatch(formTemplateFetchSuccseed({
      formName: formName,
      formTemplate: response.data,
    }));
  }).catch(function (response) {
    dispatch(formTemplateFetchFail());
    dispatch(showError(response));
  });
};

/**
 * Tests list element
 * fetching data from database
 */
export const fetchTests = () => (dispatch) => {
  const url = `${BACKEND_URL}/tests`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(testsListTemplateFetchSucceed(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

/**
 * Chain builder page
 * fetching data from database
 */
export const fetchChainTemplates = () => (dispatch, getState) => {
  const url = `${BACKEND_URL}/chain_templates`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(allChainEditorTemplateFetchSucceed(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

/**
 * Form builder
 * fetching data from database
 */
export const fetchBuilderChains = () => (dispatch, getState) => {
  const url = `${BACKEND_URL}/chain_templates`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(formBuilderChainsFetchSucceed(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

/**
 * fetching groups for owner from database
 */
export const fetchGroups = () => (dispatch, getState) => {
  const url = `${BACKEND_URL}/owners/personal`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(formGroupsFetchSucceed(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

/**
 * fetching groups for owner and members from database
 */
export const fetchGroupsForMembers = () => (dispatch) => {
  const url = `${BACKEND_URL}/owners/personal`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(formGroupsForMembersFetchSucceed(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

/**
 * Test Builder
 * fetching data from database
 */
export const testBuilderDataFetch = () => (dispatch) => {
  const url = `${BACKEND_URL}/tests`;
  const header = {headers: {SessionID: getToken()}};

  axios.get(url, header).then(function (response) {
    dispatch(testBuilderTestsFetchSucceed(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

/**
 * Test List
 * fetching data from database
 */
export const testListDataFetch = () => (dispatch) => {
  const url = `${BACKEND_URL}/tests`;
  const header = {headers: {SessionID: getToken()}};

  axios.get(url, header).then(function (response) {
    dispatch(testListTestsFetchSucceed(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

/**
 * Test Builder
 * Submit data to database
 */
export const submitTest = (testObject) => (dispatch, getState) => {
  let staticTags, dynamicTags;
  let tags = {};
  if (testObject.test.tag_names.static.length > 0) {
    staticTags = testObject.test.tag_names.static.map(t => t.label);
    tags.static = staticTags;
  }
  if (testObject.test.tag_names.dynamic.length > 0) {
    dynamicTags = testObject.test.tag_names.dynamic.map(t => t.label);
    tags.dynamic = dynamicTags;
  }

  //TODO: Убрать после доработки бэка
  if (testObject.test.job_trigger.login === undefined || testObject.test.job_trigger.login === '') {
    testObject.test.job_trigger.passOrToken = testObject.test.job_trigger.token;
  } else {
    testObject.test.job_trigger.passOrToken = testObject.test.job_trigger.password;
  }
  const result = [{
    test_name: testObject.test.test_name,
    job_trigger: testObject.test.job_trigger,
    tag_names: tags,
    stands: testObject.test.stands,
    a_system: testObject.test.a_system,
  }];

  const header = {headers: {SessionID: getToken()}};
  if (testObject.test.modified) {
    const updateTestUrl = `${BACKEND_URL}/tests/${testObject.id}`;
    axios.post(updateTestUrl, result, header).then(function () {
      dispatch(success({message: "Успешно сохранено!"}));
      dispatch(resetModificationMarkers());
    }).catch(function (response) {
      dispatch(error({message: "Произошла ошибка при сохранении!" + response}));
    });
  }
  if (testObject.test.new) {
    const addTestUrl = `${BACKEND_URL}/tests`;

    axios.put(addTestUrl, result, header).then(function () {
      dispatch(success({message: "Успешно сохранено!"}));
      dispatch(resetModificationMarkers());
    }).catch(function (response) {
      dispatch(error({message: "Произошла ошибка при сохранении!" + response}));
    });
  }
};

/**
 *  Data Templates Builder
 *  fetching data from database
 */
export const fetchDataTemplates = () => (dispatch) => {
  const url = `${BACKEND_URL}/templates`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(dataTemplatesFetchSuccess(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

/**
 * Data Templates Builder
 * validate values before submit
 */

export const validateDTBSubmitValue = (submitData) => (dispatch) => {
  const data = [...submitData.value.data];
  const checkArray = [];
  for (let entry of data) {
    if (checkArray.indexOf(entry.key) === -1) {
      checkArray.push(entry.key);
    } else {
      dispatch(error({message: "Ключи дублируются! Дублирующийся ключ: " + entry.key}));
      return;
    }
  }
  dispatch(submitDataTemplates(submitData));
};

/**
 * Data Templates Builder
 * submit data to database
 */
export const submitDataTemplates = (submitData) => (dispatch) => {
  const data = submitData.value.data.reduce((acc, current) => {
    acc[current.key] = current.value;
    return acc;
  }, {});
  const header = {headers: {SessionID: getToken()}};

  const requestBody = {
    name: submitData.value.name,
    data: data
  };

  if (submitData.value.modified) {
    const url = `${BACKEND_URL}/templates/${submitData.name}`;

    axios.post(url, [requestBody], header).then(function () {
      dispatch(success({message: "Успешно сохранено!"}));
      dispatch(updateDataTemplateSuccess());
    }).catch(function (response) {
      dispatch(error({message: "Произошла ошибка при сохранении!" + response}));
    });
  }
  if (submitData.value.new) {
    const url = `${BACKEND_URL}/templates`;

    axios.put(url, [requestBody], header).then(function () {
      dispatch(success({message: "Успешно сохранено!"}));
      dispatch(updateDataTemplateSuccess());
    }).catch(function (response) {
      dispatch(error({message: "Произошла ошибка при сохранении" + response}));
    });
  }

};

export const filterDirectoryData = (filterData) => (dispatch) => {
  //TODO Добавить коментарий с описанием метода

  const url = `${BACKEND_URL}/filterDataDirectory`;

  axios.post(url, filterData).then(function () {
    //  TODO обработка полученных данных тое диспач
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

/**
 * Launcher page
 * creates new order
 */
export const submitFormTemplate = (params) => (dispatch) => {
  let values = Object.values(params.data);
  let keys = params.label;
  let regEx = params.regEx;

  for (var i=0; i < Object.values(params.data).length; i++) {
    if ((regEx[i] !== "") && regEx[i] !== null && (values[i] !== null) && (values[i] !== "")) {
      if (!new RegExp(eval(regEx[i])).test(values[i])){
        dispatch(error({message: "Ошибка: регулярное выражение для поля " + keys[i] + " некорректно!"}));
        return;
      }
    }
  }

  const url = `${BACKEND_URL}/orders`;
  const header = {headers: {SessionID: getToken()}};
  axios.put(url, [params], header).then(function (response) {
    dispatch(orderCreated(response.data.message));
  }).catch(function (response) {
    dispatch(error({message: "Произошла ошибка при сохранении!" + response}));
  });
};

/**
 * All pages
 * gets information from dictionary and
 * dispatches provided action
 *
 * @param dictionary - dictionary name (systems, stands, test_types)
 * @param onSuccess - action to dispatch response
 * @returns {function(*)}
 */

export const getDictionaryData = (dictionary, onSuccess) => (dispatch) => {
  const url = `${BACKEND_URL}/dictionaries/${dictionary}`;
  axios.get(url).then(function (response) {
    dispatch(onSuccess(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

/**
 * Launcher
 * Получить группы, в которых состоит текущий пользователь
 * @returns {function(*)}
 */
export const getUsersGroups = () => (dispatch) => {
  const url = `${BACKEND_URL}/owners/personal/getGroups`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(launcherUserGroupsFetchSucceed(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

/**
 * Pesonal page
 * update getGroups members
 */
export const submitFormMembers = (params) => (dispatch) => {

  const url = `${BACKEND_URL}/owners/personal`;
  const header = {headers: {SessionID: getToken()}};
  axios.post(url, [params], header).then(function (response) {
    dispatch(success({message: "Успешно обновлено!"}));
  }).catch(function (response) {
    dispatch(error({message: "Произошла ошибка при сохранении!" + response}));
  });
};

/**
 * All pages
 * Запрос на фильтрацию по тегам.
 * @param tags - тело запроса (сами теги)
 * @param entity - название таблицы. На момент написания комментария доступны 'tests' и 'chain_templates'
 * @param ...props - дополнительные параметры, для передачи в редьюсер, например другие фильтры
 * @param callback - функция для обработки возвращаемого значения
 */
export const filterEntityByTags = (tags, entity, callback, {...props}) => (dispatch) => {
  const url = `${BACKEND_URL}/${entity}/filter`;
  axios.post(url, tags).then(function (response) {

    dispatch(callback(response.data, props));
  }).catch(function (response) {
    dispatch(callback([], props));
    //dispatch(error({message: "Request failed with error!" + response.message}));
  });
};

export const fetchFullChainTemplateList = () => (dispatch, getState) => {
  const url = `${BACKEND_URL}/tests`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(testChainTemplateFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

export const fetchAllChainTemplates = () => (dispatch, getState) => {
  const url = `${BACKEND_URL}/chain_templates`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(allChainTemplateFetchSucceed(response.data));
  }).catch(function (response) {
    dispatch(showError(response));
  });
};

export const fetchStands = () => (dispatch) => {
  const url = `${BACKEND_URL}/stands`;
  const header = {headers: {SessionID: getToken()}};
  axios.get(url, header).then(function (response) {
    dispatch(standsFetchSucceed(response.data))
  }).catch(function (response) {
    dispatch(showError(response));
  });
};


