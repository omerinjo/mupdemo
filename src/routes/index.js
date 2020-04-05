import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Details from '../pages/details/Details';
//
const allRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detalji" component={Details} />
    </Switch>
)
export default allRoutes