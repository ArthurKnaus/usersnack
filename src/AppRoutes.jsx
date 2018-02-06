import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';

import { PizzaDetails, PizzaList } from './containers';

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      { /* ---- PIZZAS ---- */ }
      <Route path="/pizzas" exact component={PizzaList} />
      <Route path="/pizzas/:id" exact component={PizzaDetails} />

      { /* ---- DEFAULT REDIRECT ---- */ }
      <Redirect from="/" to="/pizzas" />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
