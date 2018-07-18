import {combineReducers} from 'redux'
import {reducer as notifications} from 'react-notification-system-redux'
import scheduleForm from './scheduleForm'
import formTemplate from './formTemplate'
import chainTemplates from './chainTemplates'
import test from './test'
import dataTemplate from './dataTemplate'
import formBuilder from './formBuilder'
import launcher from "./launcher"
import testBuilder from "./TestBuilder"
import dataTemplatesBuilderReducer from "./DataTemplates"
import dataDirectory from './dataDirectory'
import dataAuthorization from './dataAuthorization'
import dataPersonal from "./dataPersonal";
import testList from "./testList";
import dataDirectoryTestReducer from "../modules/DataDirectoryTest/DataDirectoryTest";
import filterChainReducer from "../modules/global/FilterChain";
import ordersTable from "../modules/DataDirectoryTest/OrdersTable"
import chainsTableReducer from "../modules/DataDirectoryTest/ChainsTable";
import testTagsPopupReducer from "../modules/DataDirectoryTest/TestTagsPopup";
import filterStandReducer from "../modules/global/FilterStand";
import filterFormReducer from "../modules/global/FilterForm";


const rootReducer = combineReducers({
  launcher,
  scheduleForm: scheduleForm,
  formTemplate,
  chainTemplates,
  test,
  dataTemplate,
  formBuilder,
  testBuilder,
  dataAuthorization,
  dataPersonal,
  dataTemplatesBuilderReducer,
  notifications,
  dataDirectory,
  testList,
  filterChainReducer,
  dataDirectoryTestReducer,
  ordersTable,
  chainsTableReducer,
  testTagsPopupReducer,
  filterStandReducer,
  filterFormReducer,
});

export default rootReducer
