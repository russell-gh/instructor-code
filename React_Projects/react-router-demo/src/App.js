import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import { BrowserRouter, Switch, Link, Redirect, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Product from "./components/Product";
import ProductNav from "./components/ProductNav";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <nav>
        <Nav />
        <Switch>
          <Route path="/product" component={ProductNav} />
        </Switch>
      </nav>

      <section>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/contact/:language" component={Contact} />
        </Switch>
      </section>
      <Section />
      <Aside />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
