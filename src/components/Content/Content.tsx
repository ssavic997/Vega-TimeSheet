import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <Route exact path="/">
        <h2>Home</h2>
      </Route>
      <Route path="/clients">
        <h2>Clients</h2>
      </Route>
      <Route path="/projects">
        <h2>projects</h2>
      </Route>
      <Route path="/categories">
        <h2>categories</h2>
      </Route>
      <Route path="/team-members">
        <h2>teammemrs</h2>
      </Route>
      <Route path="/reports">
        <h2>reports</h2>
      </Route>
    </div>
  );
};

export default Content;
