import Auth from './auth/Auth';
import Callback from "./auth/Callback";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import Tenant from "./pages/Tenant";

const auth = new Auth();

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
        <MainNav
          isLoggedIn={this.state.isLoggedIn}
          login={this.login.bind(this)}
          logout={this.logout.bind(this)}
        />

        <Router>
          <div>
            <Route exact path="/" component={Home} />
            {/* <SecureRoute path="/tenant" component={Tenant} /> */}
            <Route path="/tenant" render={(props) => (
              !auth.isAuthenticated() ? (
                <Redirect to="/" />
              ) : (
                <Tenant {...props} />
              )
            )} />
            {/* <SecureRoute path="/editprofile" component={EditProfile} /> */}
            <Route path="/editprofile" render={(props) => (
              !auth.isAuthenticated( )? (
                <Redirect to="/" />
              ) : (
                <EditProfile {...props} />
              )
            )} />
            <Route path="/callback" render={(props) => {
              return <Callback
                {...props}
                postLogIn={this.postLogIn.bind(this)}
                handleAuthentication={auth.handleAuthentication}
              />;
            }} />
          </div>
        </Router>
      </div>
    )
  }

};

export default App;