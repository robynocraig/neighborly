import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainNav from './components/MainNav';
// import Top from './components/Top';
import Home from './components/Home';
import Private from './components/Private';
import Login from './auth/Login';
import Logout from './auth/Logout';

const App = () => (
  <div>
    <MainNav />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/private" component={Private} /> */}
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </main>
  </div>
)

export default App;