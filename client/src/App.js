// import Auth from './auth/Auth';
// import Callback from "./auth/Callback";
// import React, { Component } from 'react';
// // import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import MainNav from "./components/MainNav";
// import Home from "./pages/Home";
// import EditProfile from "./pages/EditProfile";
// import Tenant from "./pages/Tenant";

// const auth = new Auth();

// class App extends Component {
//   state = {
//     isLoggedIn: auth.isAuthenticated()
//   }

//   postLogIn() {
//     this.setState(
//       { isLoggedIn: true }
//     )
//   }

//   login() {
//     auth.login();
//   }

//   logout() {
//     auth.logout();
//     this.setState(
//       { isLoggedIn: false }
//     )
//   }

//   render() {
//     return (
//       <div>
//         <MainNav
//           isLoggedIn={this.state.isLoggedIn}
//           login={this.login.bind(this)}
//           logout={this.logout.bind(this)}
//         />

//         <Router>
//           <div>
//             <Route exact path="/" component={Home} />
//             {/* <SecureRoute path="/tenant" component={Tenant} /> */}
//             <Route path="/tenant" render={(props) => (
//               !auth.isAuthenticated() ? (
//                 <Redirect to="/" />
//               ) : (
//                 <Tenant {...props} />
//               )
//             )} />
//             {/* <SecureRoute path="/editprofile" component={EditProfile} /> */}
//             <Route path="/editprofile" render={(props) => (
//               !auth.isAuthenticated( )? (
//                 <Redirect to="/" />
//               ) : (
//                 <EditProfile {...props} />
//               )
//             )} />
//             <Route path="/callback" render={(props) => {
//               return <Callback
//                 {...props}
//                 postLogIn={this.postLogIn.bind(this)}
//                 handleAuthentication={auth.handleAuthentication}
//               />;
//             }} />
//           </div>
//         </Router>
//       </div>
//     )
//   }

// };

// export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Top from './components/Top';
import Private from './components/Private';
import Login from './auth/Login';
import Logout from './auth/Logout';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/private" component={Private} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        }}/>
      </Switch>
    </main>
  </div>
)

export default App;