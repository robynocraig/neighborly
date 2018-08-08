// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));