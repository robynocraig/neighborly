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

const auth = new Auth();

const App = () => (
  auth.login()
);

export default App;
