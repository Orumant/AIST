import {
  ADD_NEW_TEST,
  ALL_CHAIN_EDITOR_TEMPLATE_FETCH_SUCCEED,
  ALL_CHAIN_TEMPLATE_FETCH_SUCCEED,
  APPLY_CHAINS_FILTERS,
  APPLY_TESTS_FILTERS,
  CHAIN_EDITOR_TEMPLATE_FETCH_SUCCEED,
  CHAIN_SELECTED,
  CHAIN_TEMPLATE_ADDED,
  CHAIN_TEMPLATE_DELETED,
  CHAIN_TEMPLATE_MARKER_CHANGED,
  CHAIN_TEMPLATE_NAME_CHANGED,
  CLEAR_CHAIN_FILTER,
  CLEAR_FILTER_TEMPLATE_LIST,
  CLEAR_ID_ORDER_ALERT,
  CLEAR_TEST_FILTER,
  CLOSE_BUTTON_CLICKED,
  CREATE_GROUP_CLICKED,
  DATA_GROUP_TEMPLATE_LIST_SUCCEED,
  DATA_TEMPLATE_ADDED,
  DATA_TEMPLATE_LIST_FAIL,
  DATA_TEMPLATE_LIST_SUCCEED,
  DATA_TEMPLATE_NAME_CHANGED,
  DATA_TEMPLATE_SELECTED,
  DATA_TEMPLATES_FETCH_SUCCESS,
  DATA_TEMPLATES_INPUT_CHANGE,
  DUPLICATE_CURRENT_CHAIN,
  DUPLICATE_CURRENT_TEST,
  FIELD_WAS_REMOVED,
  FILTER_CHAIN_TEMPLATE_LIST_BY_PARAMS,
  FILTER_CHAIN_TEMPLATE_LIST_BY_TAGS_SUCCEED,
  FILTERED_CHAIN_BY_TAGS_FETCH_SUCCEED,
  FILTERED_TEST_BY_TAGS_FETCH_SUCCEED,
  FILTERED_TEST_BY_TAGS_FETCH_SUCCEED_CHAIN_EDITOR,
  FORM_BUILDER_CHAINS_FETCH_SUCCEED,
  FORM_GROUPS_FETCH_SUCCEED,
  FORM_GROUPS_FOR_MEMBERS_FETCH_SUCCEED,
  FORM_INPUT_CHANGE,
  FORM_TEMPLATE_FETCH_FAIL,
  FORM_TEMPLATE_FETCH_SUCCSEED,
  GET_VALIDATION_RESULTS,
  GROUP_ADDED,
  GROUP_NAME_CHANGE,
  GROUP_SELECTED,
  LAUNCHER_USER_GROUPS_FETCH_SUCCEED,
  LOGIN_BUTTON_CLICKED,
  LOGIN_PASSWORD_CHANGE,
  NEW_DATA_TEMPLATE_ADDED,
  NEW_DATA_TEMPLATE_PARAM_ADDED,
  NEW_FIELD_ADDED,
  ON_FIELDS_VALUES_UPDATE,
  ORDER_CREATED,
  ORDERS_CSV_FETCH_FAIL,
  ORDERS_CSV_FETCH_SUCCEED,
  ORDERS_FETCH_FAIL,
  ORDERS_FETCH_SUCCEED,
  RESET_MODIFICATION_MARKERS,
  SCHEDULE_AMOUNT_OF_TIMES_CHANGED,
  SCHEDULE_DATE_CHANGED,
  SCHEDULE_TIME_CHANGED,
  STANDS_FETCH_SUCCEED,
  SUBMIT_CHAIN_TEMPLATE_SUCCEED,
  SUBMIT_RERUN_ORDER_SUCCEED,
  TEMPLATE_FORM_INPUT_CHANGE,
  TEMPLATE_GROUP_FORM_INPUT_CHANGE,
  TEST_AS_SELECTED,
  TEST_BLOCK_CLICKED,
  TEST_BLOCK_MOVED,
  TEST_BUILDER_AS_FETCH_SUCCEED,
  TEST_BUILDER_FORM_INPUT_CHANGED,
  TEST_BUILDER_STANDS_FETCH_SUCCEED,
  TEST_BUILDER_TESTS_FETCH_SUCCEED,
  TEST_CHAIN_TEMPLATE_FETCH_SUCCEED,
  TEST_FETCH_SUCCEED,
  TEST_LIST_AS_FETCH_SUCCEED,
  TEST_LIST_AS_SELECTED,
  TEST_LIST_SELECTED,
  TEST_LIST_TESTS_FETCH_SUCCEED,
  TEST_SELECTED,
  TEST_STANDS_INPUT_CHANGE,
  UPDATE_CHAIN_FORM_SUCCEED,
  UPDATE_DATA_TEMPLATE_SUCCESS,
} from './constants';

export const groupNameChange = (payload) => ({
  type: GROUP_NAME_CHANGE,
  payload,
});

export const createGroupClicked = (payload) => ({
  type: CREATE_GROUP_CLICKED,
  payload,
});

export const ordersFetchSucceed = (payload) => ({
  type: ORDERS_FETCH_SUCCEED,
  payload,
});

export const ordersFetchFail = (payload) => ({
  type: ORDERS_FETCH_FAIL,
  payload,
});

export const ordersCSVFetchSucceed = (payload) => ({
  type: ORDERS_CSV_FETCH_SUCCEED,
  payload,
});

export const ordersCSVFetchFail = (payload) => ({
  type: ORDERS_CSV_FETCH_FAIL,
  payload,
});

export const loginButtonClicked = (payload) => ({
  type: LOGIN_BUTTON_CLICKED,
  payload,
});

export const loginPasswordChange = (payload) => ({
  type: LOGIN_PASSWORD_CHANGE,
  payload,
});

export const selectGroupForm = (payload) => ({
  type: GROUP_SELECTED,
  payload: payload
});

export const onFormInputChange = (value, paramName, formName) => ({
  type: FORM_INPUT_CHANGE,
  payload: {value, paramName, formName}
});

export const updateChainFormSucceed = (payload) => ({
  type: UPDATE_CHAIN_FORM_SUCCEED,
  payload: payload
});

export const onTemplateFormInputChange = (value, paramName, formName) => ({
  type: TEMPLATE_FORM_INPUT_CHANGE,
  payload: {value, paramName, formName}
});

export const onTemplateGropupFormInputChange = (value) => ({
  type: TEMPLATE_GROUP_FORM_INPUT_CHANGE,
  payload: {value}
});

export const testBlockMoved = (payload) => ({
  type: TEST_BLOCK_MOVED,
  payload: payload
});

export const formTemplateFetchSuccseed = (payload) => ({
  type: FORM_TEMPLATE_FETCH_SUCCSEED,
  payload: payload
});

export const chainTemplateNameChanged = (payload) => ({
  type: CHAIN_TEMPLATE_NAME_CHANGED,
  payload: payload
});

export const deleteChainTemplate = (payload) => ({
  type: CHAIN_TEMPLATE_DELETED,
  payload: payload
});

export const addChainTemplate = (payload) => ({
  type: CHAIN_TEMPLATE_ADDED,
  payload,
});

export const formTemplateFetchFail = (payload) => ({
  type: FORM_TEMPLATE_FETCH_FAIL,
  payload: payload
});

export const chainEditorTemplateFetchSucceed = (payload) => ({
  type: CHAIN_EDITOR_TEMPLATE_FETCH_SUCCEED,
  payload: payload
});

export const allChainEditorTemplateFetchSucceed = (payload) => ({
  type: ALL_CHAIN_EDITOR_TEMPLATE_FETCH_SUCCEED,
  payload: payload
});

export const testsListTemplateFetchSucceed = (payload) => ({
  type: TEST_FETCH_SUCCEED,
  payload: payload
});

export const testBlockClicked = (payload) => ({
  type: TEST_BLOCK_CLICKED,
  payload: payload
});

export const closeButtonClicked = (payload) => ({
  type: CLOSE_BUTTON_CLICKED,
  payload: payload
});

export const submitChainTemplateSucceed = () => ({
  type: SUBMIT_CHAIN_TEMPLATE_SUCCEED,
});

export const submitRerunOrderSucceed = () => ({
  type: SUBMIT_RERUN_ORDER_SUCCEED,
});

export const changeDate = (payload) => ({
  type: SCHEDULE_DATE_CHANGED,
  payload: payload
});

export const changeTime = (payload) => ({
  type: SCHEDULE_TIME_CHANGED,
  payload: payload
});
export const changeAmountOfTimes = (payload) => ({
  type: SCHEDULE_AMOUNT_OF_TIMES_CHANGED,
  payload: payload
});

export const dataTemplateFetchFail = (payload) => ({
  type: DATA_TEMPLATE_LIST_FAIL,
  payload: payload
});

export const dataTemplateFetchSucceed = (payload) => ({
  type: DATA_TEMPLATE_LIST_SUCCEED,
  payload: payload
});

export const dataGroupTemplateFetchSucceed = (payload) => ({
  type: DATA_GROUP_TEMPLATE_LIST_SUCCEED,
  payload: payload
});

export const formBuilderChainsFetchSucceed = (payload) => ({
  type: FORM_BUILDER_CHAINS_FETCH_SUCCEED,
  payload: payload
});

export const formGroupsFetchSucceed = (payload) => ({
  type: FORM_GROUPS_FETCH_SUCCEED,
  payload: payload
});

export const formGroupsForMembersFetchSucceed = (payload) => ({
  type: FORM_GROUPS_FOR_MEMBERS_FETCH_SUCCEED,
  payload: payload
});

export const newFieldAdded = (payload) => ({
  type: NEW_FIELD_ADDED,
  payload: payload
});

export const onFieldsValuesUpdate = (payload) => ({
  type: ON_FIELDS_VALUES_UPDATE,
  payload: payload
});

export const fieldWasRemoved = (payload) => ({
  type: FIELD_WAS_REMOVED,
  payload: payload
});

export const testBuilderTestsFetchSucceed = (payload) => ({
  type: TEST_BUILDER_TESTS_FETCH_SUCCEED,
  payload: payload
});

export const testListTestsFetchSucceed = (payload) => ({
  type: TEST_LIST_TESTS_FETCH_SUCCEED,
  payload: payload
});

export const testSelected = (payload) => ({
  type: TEST_SELECTED,
  payload: payload
});

export const testListSelected = (payload) => ({
  type: TEST_LIST_SELECTED,
  payload: payload
});

export const testBuilderFormInputChanged = (payload) => ({
  type: TEST_BUILDER_FORM_INPUT_CHANGED,
  payload: payload
});

export const newTestAdded = () => ({
  type: ADD_NEW_TEST,
});

export const resetModificationMarkers = () => ({
  type: RESET_MODIFICATION_MARKERS,
});

export const dataTemplatesFetchSuccess = (payload) => ({
  type: DATA_TEMPLATES_FETCH_SUCCESS,
  payload: payload
});

export const setSelectedDataTemplateIndex = (payload) => ({
  type: DATA_TEMPLATE_SELECTED,
  payload: payload
});

export const dataTemplatesInputChange = (payload) => ({
  type: DATA_TEMPLATES_INPUT_CHANGE,
  payload: payload
});

export const dataTemplateNameChanged = (payload) => ({
  type: DATA_TEMPLATE_NAME_CHANGED,
  payload: payload
});

export const newDataTemplateAdded = () => ({
  type: NEW_DATA_TEMPLATE_ADDED,
});

export const newDataTemplateParamAdded = () => ({
  type: NEW_DATA_TEMPLATE_PARAM_ADDED,
});

export const chainSelected = (selectedChain) => ({
  type: CHAIN_SELECTED,
  selectedChain,
});

export const chainTemplateMarkerChanged = (payload) => ({
  type: CHAIN_TEMPLATE_MARKER_CHANGED,
  payload,
});

export const updateDataTemplateSuccess = () => ({
  type: UPDATE_DATA_TEMPLATE_SUCCESS,
});

export const duplicateCurrentChain = (payload) => ({
  type: DUPLICATE_CURRENT_CHAIN,
  payload,
});

export const addGroupToChain = (payload) => ({
  type: GROUP_ADDED,
  payload,
});

export const addDTToChain = (payload) => ({
  type: DATA_TEMPLATE_ADDED,
  payload,
});

export const orderCreated = (id) => ({
  type: ORDER_CREATED,
  id,
});

export const clearIdOrderAlert = () => ({
  type: CLEAR_ID_ORDER_ALERT,
});

export const launcherUserGroupsFetchSucceed = (groups) => ({
  type: LAUNCHER_USER_GROUPS_FETCH_SUCCEED,
  groups,
});

export const testBuilderAsFetchSucceed = (as) => ({
  type: TEST_BUILDER_AS_FETCH_SUCCEED,
  as,
});

export const testListAsFetchSucceed = (as) => ({
  type: TEST_LIST_AS_FETCH_SUCCEED,
  as,
});

export const testASSelected = (index) => ({
  type: TEST_AS_SELECTED,
  index,
});

export const testListASSelected = (index) => ({
  type: TEST_LIST_AS_SELECTED,
  index,
});

export const testBuilderStandsFetchSucceed = (stands) => ({
  type: TEST_BUILDER_STANDS_FETCH_SUCCEED,
  stands,
});

export const duplicateCurrentTest = () => ({
  type: DUPLICATE_CURRENT_TEST,
});

export const testStandsInputChange = (stands) => ({
  type: TEST_STANDS_INPUT_CHANGE,
  stands,
});

export const clearTestFilter = () => ({
  type: CLEAR_TEST_FILTER,
});

export const clearChainFilter = () => ({
  type: CLEAR_CHAIN_FILTER,
});

export const filteredTestByTagsFetchSucceed = (tests, filters) => ({
  type: FILTERED_TEST_BY_TAGS_FETCH_SUCCEED,
  tests,
  filters,
});

export const filteredTestByTagsFetchSucceedChainEditor = (tests, filters) => ({
  type: FILTERED_TEST_BY_TAGS_FETCH_SUCCEED_CHAIN_EDITOR,
  tests,
  filters,
});

export const filteredChainByTagsFetchSucceed = (chain_templates, filters) => ({
  type: FILTERED_CHAIN_BY_TAGS_FETCH_SUCCEED,
  chain_templates,
  filters,
});

export const applyTestsFilters = (filters) => ({
  type: APPLY_TESTS_FILTERS,
  filters,
});

export const getValidationResults = (chain, index) => ({
  type: GET_VALIDATION_RESULTS,
  chain,
  index,
});

export const applyChainsFilters = (filters) => ({
  type: APPLY_CHAINS_FILTERS,
  filters,
});

export const allChainTemplateFetchSucceed = (payload) => ({
  type: ALL_CHAIN_TEMPLATE_FETCH_SUCCEED,
  payload,
});

export const testChainTemplateFetchSucceed = (payload) => ({
  type: TEST_CHAIN_TEMPLATE_FETCH_SUCCEED,
  payload,
});

export const standsFetchSucceed = (payload) => ({
  type: STANDS_FETCH_SUCCEED,
  payload,
});

export const filterChainTemplateListByParams = (filter) => ({
  type: FILTER_CHAIN_TEMPLATE_LIST_BY_PARAMS,
  filter,
});

export const filterChainTemplateListByTagsSucceed = (chain_templates) => ({
  type: FILTER_CHAIN_TEMPLATE_LIST_BY_TAGS_SUCCEED,
  chain_templates,
});

export const clearFilterChainTemplateList = () => ({
  type: CLEAR_FILTER_TEMPLATE_LIST,
});


