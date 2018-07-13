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
import dataDirectoryTestReducer from "../modules/DataDirectoryTest";
import filterChainReducer from "../modules/FilterChain";
import ordersTable from "../modules/OrdersTable"
import chainsTableReducer from "../modules/ChainsTable";
import testTagsPopupReducer from "../modules/TestTagsPopup";


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
});

export default rootReducer
