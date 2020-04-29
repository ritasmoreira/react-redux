import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import SearchContainer from "./search/SearchContainer";
import ResultContainer from "./result/ResultContainer";

const App = () => {
  return (
    <div className='ui container' style={{ margin: "25px" }}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path='/' exact component={SearchContainer} />
          <Route path='/results/:id' component={ResultContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
