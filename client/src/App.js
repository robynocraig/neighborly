import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Management from "./pages/Managements";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Post from "./components/Post";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Management} />
        <Route exact path="/managements" component={Management} />
      </Switch>
    </div>
  </Router>
);

export default App;