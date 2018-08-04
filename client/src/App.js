import Auth from './auth/Auth';
import Callback from "./auth/Callback";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainNav from "./components/MainNav";
import Splash from "./pages/Splash";
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
          auth={auth}
          isLoggedIn2={this.state.isLoggedIn}
          login={this.login.bind(this)}
          logout={this.logout.bind(this)}
        />

        <Router>
          <div>
            <Route exact path="/" component={Splash} />
            <Route path="/tenant" component={Tenant} />
            <Route exact path="/editprofile" component={EditProfile} />
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
