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
import ResultsReducer from "../modules/ResultsPage/Results/index";
import ordersTable from "../modules/DataDirectoryTest/OrdersTable/index"
import filterStandReducer from "../modules/_global/FilterStand";
import dataDirectoryTestReducer from "../modules/DataDirectoryTest/DataDirectoryTest/index";
import searchBarReducer from "../modules/ResultsPage/SearchBar/index";
import searchBarReducerDD from "../modules/DataDirectoryTest/SearchBar/index";
import TestTableReducer from "../modules/ResultsPage/TestTable/reducer";
import chainTemplateList from "./chainTemplateList";
import filterSidebarReducer from "../modules/_global/FilterSidebar";
import searchBarReducerChainList from "../modules/ChainListPage/SearchBar";
import chainsListReducer from "../modules/ChainListPage/ChainListPage";



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
  searchBarReducer,
  searchBarReducerDD,
  TestTableReducer,
  chainTemplateList,
  filterSidebarReducer,
  searchBarReducerChainList,
  chainsListReducer,
});

export default rootReducer
