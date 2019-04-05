import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

import ProductsList from "../products-list/products-list";

import {
  ProductsContainer,
  ProductsFilterContainer,
  ProductsListContainer,
  SearchBar,
  ListContainer,
  Spanner
} from "./products.style";

class Products extends Component {
  state = {
    hide: true
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleScreenResize);
    this.handleScreenResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScreenResize);
  }

  handleScreenResize = () => {
    if (window.innerWidth >= 576) {
      this.hideSpanner();
    }
  };

  hideSpanner = () => {
    this.setState(
      {
        hide: true
      },
      () => {
        document.body.style.overflow = "visible";
      }
    );
  };

  showSpanner = () => {
    this.setState(
      {
        hide: false
      },
      () => {
        document.body.style.overflow = "hidden";
      }
    );
  };

  handleSpanner = () => {
    this.state.hide ? this.showSpanner() : this.hideSpanner();
  };

  getTypes() {
    let types = [];

    for (let index = 0; index < 15; index++) {
      types.push(
        <ListGroup.Item action href={`#link${index}`} key={index}>
          Type {index}
        </ListGroup.Item>
      );
    }
    return types;
  }

  render() {
    return (
      <ProductsContainer>
        <ProductsFilterContainer>
          <SearchBar
            type="text"
            placeholder="Search"
            autoComplete="off"
            spellCheck="false"
            className="form-control"
          />
          <ListContainer hide={this.state.hide} defaultActiveKey="#link0">
            {this.getTypes()}
          </ListContainer>
          <Spanner show={!this.state.hide} onClick={this.handleSpanner} />
        </ProductsFilterContainer>
        <ProductsListContainer
          dim={!this.state.hide}
          onClick={this.hideSpanner}
          onTouchStart={this.hideSpanner}
        >
          <ProductsList />
        </ProductsListContainer>
      </ProductsContainer>
    );
  }
}

export default Products;
