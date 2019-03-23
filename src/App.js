import React, { Component, Fragment } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/ui/header";
// import Footer from "./components/ui/footer";
import Home from "./components/home/home";
import Products from "./components/products/products";
import About from "./components/about/about";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
