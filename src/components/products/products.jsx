import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

import ProductsList from "../products-list/products-list";

import {
  ProductsContainer,
  ProductsFilterContainer,
  ProductsListContainer,
  SearchBar,
  ListContainer,
  Spanner,
  ScrollButton
} from "./products.style";

import { FaChevronUp } from "react-icons/fa";

class Products extends Component {
  state = {
    hideSpanner: true,
    hideScollBtn: true
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleScreenResize);
    this.handleScreenResize();
    window.addEventListener("scroll", this.handleScreenScroll);
    this.handleScreenScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScreenResize);
    window.removeEventListener("scroll", this.handleScreenScroll);
  }

  handleScreenResize = () => {
    if (window.innerWidth >= 576) {
      this.hideSpanner();
    }
  };

  handleScreenScroll = () => {
    // Handle lag - from too many setstate
    let hide = window.pageYOffset > 50 ? false : true;

    if (this.state.hideScollBtn !== hide) {
      this.setState({
        hideScollBtn: hide
      });
    }
  };

  hideSpanner = () => {
    this.setState(
      {
        hideSpanner: true,
        intervalId: 0
      },
      () => {
        document.body.style.overflow = "visible";
      }
    );
  };

  showSpanner = () => {
    this.setState(
      {
        hideSpanner: false
      },
      () => {
        document.body.style.overflow = "hidden";
      }
    );
  };

  handleSpanner = () => {
    this.state.hideSpanner ? this.showSpanner() : this.hideSpanner();
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

  ScrollTop() {
    let preScroll;
    let currScroll;
    const scrollSpeed = 15;
    (function smoothscroll() {
      preScroll = currScroll;
      currScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (currScroll > 0 && preScroll !== currScroll) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currScroll - currScroll / scrollSpeed);
      }
    })();
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
          <ListContainer
            hide={this.state.hideSpanner}
            defaultActiveKey="#link0"
          >
            {this.getTypes()}
          </ListContainer>
          <Spanner
            show={!this.state.hideSpanner}
            onClick={this.handleSpanner}
          />
        </ProductsFilterContainer>
        <ProductsListContainer
          dim={!this.state.hideSpanner}
          onClick={this.hideSpanner}
          onTouchStart={this.hideSpanner}
        >
          <ProductsList />
          <ScrollButton
            hide={this.state.hideScollBtn || !this.state.hideSpanner}
            onClick={this.ScrollTop}
          >
            <FaChevronUp />
          </ScrollButton>
        </ProductsListContainer>
      </ProductsContainer>
    );
  }
}

export default Products;
