import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

import ProductsList from "../products-list/products-list";

import {
  ProductsContainer,
  ProductsFilterContainer,
  ProductsListContainer
} from "./products.style";

class Products extends Component {
  render() {
    return (
      <ProductsContainer>
        <ProductsFilterContainer>
          <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action href="#link1">
              Type A
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Type B
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Type C
            </ListGroup.Item>
          </ListGroup>
        </ProductsFilterContainer>
        <ProductsListContainer>
          <ProductsList />
        </ProductsListContainer>
      </ProductsContainer>
    );
  }
}

export default Products;
