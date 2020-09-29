import React from 'react';
import { withCookies } from 'react-cookie';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Petshop from './pages/petshop/Petshop';
import Petshop from './pages/Petshop';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Petshop} />
      </Switch>
    </BrowserRouter>
  );
}

export default withCookies(Routes);
