import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainNav from './components/MainNav';
import Home from './pages/Home';
import Login from './auth/Login';
import Logout from './auth/Logout';
import EditProfile from './pages/EditProfile';
import Management from './pages/Management';
import Footer from './components/Footer';

const App = () => (
  <div>
    <MainNav />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/editprofile" component={EditProfile} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/management" component={Management} />
      </Switch>
    </main>
    <Footer />
  </div>
)

export default App;
