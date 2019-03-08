import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../src/components/App';
import Courses from '../src/components/Courses';
import Login from '../src/components/Login';
import Users from '../src/components/Users';
import Exhibitions from '../src/components/Exhibitions'

export default(
    <Route path="/" component={App}>
    <Route path="users" component={Users} />
        <Route path="courses" component={Courses} />
        <Route path="login" component={Login} />
        <Route path="exhibitions" component={Exhibitions} />
    </Route>
)