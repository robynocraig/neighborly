// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// const App = () => (
//   <Router>
//     <div>
//       <Nav />
//       <Switch>
//         <Route exact path="/" component={Management} />
//         <Route exact path="/managements" component={Management} />
//       </Switch>
//     </div>
//   </Router>
// );

import Auth from './auth/auth';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Dummy from "./components/Dummy";
import Callback from "./callback/callback";

const auth = new Auth();

const hello = () => {
  return (
    <h2>hello world</h2>
  )
}

class App extends Component {
  state = {
    isLoggedIn: auth.isAuthenticated()
  }

  postLogIn() {
    this.setState(
      { isLoggedIn: true }
    )
  }

  login() {
    auth.login();
  }

  logout() {
    auth.logout();
    this.setState(
      { isLoggedIn: false }
    )
  }

  render() {
    return (
      <div>
        <Nav
          auth={auth}
          isLoggedIn2={this.state.isLoggedIn}
          login={this.login.bind(this)}
          logout={this.logout.bind(this)}
        />

        <Router>
          <div>
            <Route exact path="/" component={hello} />
            <Route path="/dummy" component={Dummy} />
            <Route path="/callback" render={() => {
              auth.handleAuthentication();
              return <Callback postLogIn={this.postLogIn.bind(this)} />;
            }}
            />
          </div>
        </Router>
      </div>
    )
  }

};

export default App;
