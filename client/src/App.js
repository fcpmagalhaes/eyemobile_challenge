/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import Petshop from './pages/Petshop';
import Invoicing from './pages/Invoicing';
import Totals from './pages/Filters/Totals';
import ClientInvoicing from './pages/Filters/ClientInvoicing';

function App() {
  return (
    <Router>
      <Invoicing>
        <Switch>
          <Route path="/totais" exact component={Totals} />
          <Route path="/clientes" exact component={ClientInvoicing} />
        </Switch>
      </Invoicing>
    </Router>
  );
}

export default App;
