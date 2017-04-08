import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.scss';
// Import js
import './js/scrolling-nav-sticky.js';

// Import Components
import App from './components/App';
import HomeContent from './components/home/HomeContent';
import SinistrSimulation from './components/sinistre/SinistrSimulation';
import Sinistr from './components/sinistre/Sinistr';
import Profile from './components/profile/Profile';
import ProfileFolders from './components/profile/ProfileFolders';
import Login from './components/Login';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContent}></IndexRoute>
        <Route path="sinistrSimulation" component={SinistrSimulation}></Route>
        <Route path="sinistr/:sinistrId" component={Sinistr}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path="profile" component={Profile}>
          <Route path="folders" component={ProfileFolders}></Route>
        </Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
