import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import rootReducer from './reducers';
import HomePage from './containers/HomePage';
import TDME2E from './containers/TDME2E';
import ChainEditorPage from './pages/ChainEditorPage';
import FormBuilderPage from "./containers/FormBuilderPage";

import DataDirectoryPage from "./pages/DataDirectoryPage";
import ChainsListPage from "./pages/ChainListPage";
import DataTemplatesBuilderPage from "./containers/DataTemplates";
import AuthorizationPage from "./containers/AuthorizationPage"
import RegistrationPage from "./containers/RegistrationPage"

import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';
import './styles/main.css';
import PersonalPage from "./pages/PersonalPage";
import ResultsPage from "./pages/ResultsPage";
import LauncherPage from "./pages/Launcher/index";
import TestBuilderPage from "./pages/TestBuilderPage/index";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk)
  ));

ReactDOM.render((
    <Provider store={store}>
      <div>
        <HashRouter>
          <Switch>
            <Route exact path='/launcher' component={LauncherPage}/>
            <Route exact path="/testbuilder" component={TestBuilderPage}/>
            <Route path="/testbuilder/:testName" component={TestBuilderPage}/>
            <Route exact path="/chaineditor" component={ChainEditorPage}/>}
            <Route path="/chaineditor/:chainName" component={ChainEditorPage}/>}
            <Route exact path="/formbuilder" component={FormBuilderPage}/>
            <Route path="/formbuilder/:chainIndex" component={FormBuilderPage}/>
            <Route exact path="/datadirectory/:chainName" component={DataDirectoryPage}/>
            <Route exact path="/datadirectory" component={DataDirectoryPage}/>
            <Route path="/datatemplates/:datatemplatesName" component={DataTemplatesBuilderPage}/>
            <Route exact path='/chainTemplateList' component={ChainsListPage}/>
            <Route exact path="/datatemplates" component={DataTemplatesBuilderPage}/>
            <Route path="/homepage" component={HomePage}/>
            <Route path="/TDME2E" component={TDME2E}/>
            <Route path="/registration" component={RegistrationPage}/>
            <Route path="/personaldata" component={PersonalPage}/>
            <Route path="/results" component={ResultsPage}/>
            <Route exact path="/" component={AuthorizationPage}/>
          </Switch>
        </HashRouter>
      </div>
    </Provider>
  ),
  document.getElementById('root'));
