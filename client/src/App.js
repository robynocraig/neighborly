import Auth from './auth/Auth';
import Callback from "./auth/Callback";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainNav from "./components/MainNav";
import Splash from "./pages/Splash";
import Tenant from "./pages/Tenant";

const auth = new Auth();

// const AuthService = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100)
//   },
//   logout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// };

const SecureRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated() === true
      ? <Component {...props} />
      // : <Redirect to="/login" />
      : auth.login()
  )} />
);

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
          auth={auth}
          isLoggedIn={this.state.isLoggedIn}
          login={this.login.bind(this)}
          logout={this.logout.bind(this)}
        />

        <Router>
          <div>
            <Route exact path="/" component={Splash} />
            <SecureRoute path="/tenant" component={Tenant} />
            <Route path="/callback" render={() => {
              // auth.handleAuthentication();
              return <Callback
                postLogIn={this.postLogIn.bind(this)}
                handleAuthentication={auth.handleAuthentication}
              />;
            }}
            />
          </div>
        </Router>
      </div>
    )
  }

};

export default App;
