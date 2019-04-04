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
    this.setState(
      {
        hide: window.innerWidth >= 576 ? false : true
      },
      () => {
        document.body.style.overflow = "visible";
      }
    );
  };

  handleSpanner = () => {
    this.setState(
      {
        hide: this.state.hide ? false : true
      },
      () => {
        this.state.hide === false
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "visible");
      }
    );
  };

  getTypes() {
    let types = [];

    for (let index = 0; index < 10; index++) {
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
          <ListContainer hide={this.state.hide}>
            <ListGroup defaultActiveKey="#link0">{this.getTypes()}</ListGroup>
          </ListContainer>
          <Spanner onClick={this.handleSpanner} />
        </ProductsFilterContainer>
        <ProductsListContainer>
          <ProductsList />
        </ProductsListContainer>
      </ProductsContainer>
    );
  }
}

export default Products;
