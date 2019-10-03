import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import CatalogView from './views/CatalogView/CatalogView'
import ProductView from './views/ProductView/ProductView'
import NoMatch from './components/NoMatch/NoMatch'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={CatalogView} />
          <Route path="/:idDevice" component={ProductView}/>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
