import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./Auth";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;