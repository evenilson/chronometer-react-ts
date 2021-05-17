
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AppContextProvider } from '../contexts/AppContext';
import { AppPage } from '../pages';

import '../styles/global.scss';


const Router = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Switch>
          <Route path='/' exact component={AppPage}/>
        </Switch>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default Router;
