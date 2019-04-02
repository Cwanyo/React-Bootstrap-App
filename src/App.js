import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Container } from "./App.style";

import Header from "./components/ui/header/header";
import Home from "./components/home/home";
import Products from "./components/products/products";
import About from "./components/about/about";

class App extends Component {
  triggerHideNavBody = () => {
    this.refs.header.hideNavBody();
  };

  render() {
    return (
      <BrowserRouter>
        <Header ref="header" />
        <Container
          onClick={this.triggerHideNavBody}
          onTouchStart={this.triggerHideNavBody}
        >
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
