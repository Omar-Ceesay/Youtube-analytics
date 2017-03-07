import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './App';
import Searchbar from './pages/search_bar';
import ProfilePage from './pages/profile';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Searchbar}/>
    <Route path='/people/:id' component={ProfilePage}/>
  </Route>
);
