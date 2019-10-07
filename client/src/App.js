import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import CatalogView from './views/CatalogView/CatalogView'
import ProductView from './views/ProductView/ProductView'
import ServerError from './components/ServerError/ServerError'
import NoMatch from './components/NoMatch/NoMatch'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={CatalogView} />
          <Route path="/product/:idDevice" component={ProductView}/>
          <Route exact path="/server-error" component={ServerError}/>
          <Route component={NoMatch}/>>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
