import React from "react";
import "./App.css";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import Users from "./components/Users";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/Users">Users Link</Link>
        <br></br>
        <br></br>
        {/* <Route path="/user/somethingelse" component={Users} />
        <Route path="/users" component={Users} />
        <Route path="/users" component={Users} /> */}
        <Route exact path="/" component={Users} />
        <Switch>
          {/* <Route path="/" component={Users} /> */}
          <Route exact path="/users/:id" component={Users} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
