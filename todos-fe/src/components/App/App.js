import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "../../routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {routes.map(route => (
              <Route key={`route-${route.name}`} {...route} />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
