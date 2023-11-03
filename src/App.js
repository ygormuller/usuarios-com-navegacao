import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

