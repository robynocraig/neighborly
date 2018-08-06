import Auth from './auth/Auth';
import Callback from "./auth/Callback";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import Tenant from "./pages/Tenant";

const auth = new Auth();

const SecureRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated() === true
      ? <Component {...props} />

      : <Redirect to={{
          pathname: '/callback',
          state: { from: props.location }
      }} />

      // : <Route path="/callback" render={() => {
      //   return <Callback
      //     postLogIn={auth.isAuthenticated}
      //     handleAuthentication={auth.handleAuthentication}
      //   />;
      // }}
      // />
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
            <Route exact path="/" component={Home} />
            <SecureRoute path="/tenant" component={Tenant} />
            <SecureRoute path="/editprofile" component={EditProfile} />
            <Route path="/callback" render={() => {
              return <Callback
                login={auth.login}
                isAuthenticated={auth.isAuthenticated}
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