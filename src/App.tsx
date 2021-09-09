import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Tape from "./components/Tape/Tape";
import Header from "./components/Header/Header";
import Content from "./components//Content/Content";
import Footer from "./components/Footer/Footer";
import Button from "./shared/Button/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Tape></Tape>
      <Router>
        <Header></Header>
        <Switch>
          <Content></Content>
        </Switch>
      </Router>
      <Footer></Footer>
      <Button></Button>
    </div>
  );
}

export default App;
