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
import ResultsReducer from "../modules/Results/Results/index";
import ordersTable from "../modules/DataDirectoryTest/OrdersTable/index"
import filterStandReducer from "../modules/global/FilterStand";
import filterFormReducer from "../modules/global/FilterForm";
import dataDirectoryTestReducer from "../modules/DataDirectoryTest/DataDirectoryTest/index";
import searchBarReducer from "../modules/Results/SearchBar/index";
import actionsBarReducer from "../modules/Results/ActionsBar/reducer";
import searchBarReducerDD from "../modules/DataDirectoryTest/SearchBar/index";
import TestTableReducer from "../modules/Results/TestTable/reducer";
import chainTemplateList from "./chainTemplateList";
import filterSidebarReducer from "../modules/global/FilterSidebar";



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
  ResultsReducer,
  dataDirectoryTestReducer,
  ordersTable,
  filterStandReducer,
  filterFormReducer,
  searchBarReducer,
  actionsBarReducer,
  searchBarReducerDD,
  TestTableReducer,
  chainTemplateList,
  filterSidebarReducer,
});

export default rootReducer
