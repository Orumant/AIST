import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import rootReducer from './reducers';

import DataDirectoryPage from "./pages/DataDirectoryPage";
import ChainsListPage from "./pages/ChainListPage";
import AuthorizationPage from "./containers/AuthorizationPage"
import RegistrationPage from "./containers/RegistrationPage"

import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';
import './styles/main.css';
import PersonalPage from "./pages/PersonalPage";
import ResultsPage from "./pages/ResultsPage";
import LauncherPage from "./pages/Launcher/index";
import TestBuilderPage from "./pages/TestBuilderPage/index";
import './style.css'
import ChainsCreatePage from "./pages/ChainsCreatePage/index";
import 'babel-polyfill'
import SelectSingle from "./pages/_global/select/SelectSimple";
import SuccessPage from "./pages/ChainsCreatePage/index/SuccessPage";
import DataTemplatesPage from "./pages/DataTemplatesPage/index";
import TestsCreatePage from "./pages/TestsCreatePage/index";
import TestSuccessPage from "./pages/TestsCreatePage/index/TestSuccessPage";
import TestsViewer from './pages/TestsViever';
import MainPage from "./pages/MainPage";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk)
  ));

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path='/launcher' component={LauncherPage}/>
            <Route exact path="/testbuilder" component={TestBuilderPage}/>
            <Route path="/testbuilder/:testName" component={TestBuilderPage}/>
            <Route exact path="/test/create" component={TestsCreatePage}/>
            <Route exact path='/test/edit/:testId' component={TestsCreatePage}/>
            <Route exact path='/success_test' component={TestSuccessPage}/>
            <Route exact path="/datadirectory" component={DataDirectoryPage}/>
            <Route exact path='/chains' component={ChainsListPage}/>
            <Route exact path='/chains/create' component={ChainsCreatePage}/>
            <Route exact path='/chains/:chainId/copy' component={ChainsCreatePage}/>
            <Route path='/chains/:chainId' component={ChainsCreatePage}/>
            <Route exact path='/success_chains' component={SuccessPage}/>
            <Route path="/datatemplates/:datatemplatesName" component={DataTemplatesPage}/>
            <Route exact path='/chainTemplateList' component={ChainsListPage}/>
            <Route exact path="/datatemplates" component={DataTemplatesPage}/>
            <Route path="/main" component={MainPage}/>
            <Route exact path='/tests' component={TestsViewer}/>
            <Route path="/registration" component={RegistrationPage}/>
            <Route path="/personaldata" component={PersonalPage}/>
            <Route path="/results" component={ResultsPage}/>
            <Route path="/test" component={SelectSingle}/>
            <Route exact path="/" component={AuthorizationPage}/>
          </Switch>
        </HashRouter>
    </Provider>
  ),
  document.getElementById('root'));
