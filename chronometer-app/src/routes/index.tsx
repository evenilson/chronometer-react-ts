import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AppPage } from '../pages';


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='' exact component={AppPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
