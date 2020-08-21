import React from "react";
import Home from "./pages/home/home";
import SignIn from "./pages/signin/signin";
import "./App.scss";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
      </div>
    </Router>
  );
};

export default App;
