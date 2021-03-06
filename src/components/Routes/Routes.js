import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../About/About";
import Certifications from "../Certifications/Certifications";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/certifications" component={Certifications} />
      <Route path="/gallery" component={Gallery} />
    </Switch>
  );
};

export default Routes;
