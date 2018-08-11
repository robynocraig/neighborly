import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainNav from './components/MainNav';
import Home from './pages/Home';
import Login from './auth/Login';
import Logout from './auth/Logout';
<<<<<<< HEAD
import Testing from './pages/Testing';
=======
import EditProfile from './pages/EditProfile';
>>>>>>> 16578ee86833f9e161b594d57a65254bacc210c2

const App = () => (
  <div>
    <MainNav />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/editprofile" component={EditProfile} />
        {/* <Route path="/private" component={Private} /> */}
        <Route exact path="/Test" component={Testing} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </main>
  </div>
)

export default App;