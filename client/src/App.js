import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainNav from './components/MainNav';
import Home from './pages/Home';
import Login from './auth/Login';
import Logout from './auth/Logout';
import Testing from './pages/Testing';
import EditProfile from './pages/EditProfile';
import Tenant from '../src/pages/Tenant';

const App = () => (
  <div>
    <MainNav />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/editprofile" component={EditProfile} />
        {/* <Route path="/private" component={Private} /> */}
        <Route exact path="/Test" component={Testing} />
        <Route exact path="/tenant" component={Tenant} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </main>
  </div>
)

export default App;