import React, { Component } from "react";
import {
  CardContainer,
  Card,
  CardImg,
  CardTitle,
  CardBody
} from "./products-list.style";

import API from "../../api/rest-api";

class ProductsList extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    API.getListOfPosts()
      .then(res => {
        this.setState({
          products: res.data
        });
        console.log(res.data);
      })
      .catch(err => {
        console.log("Error");
      });
  }

  showProductsList = () => {
    const { products } = this.state;
    const productsList = products.length ? (
      products.slice(0, 20).map(product => {
        return (
          <Card key={product.id}>
            <CardImg src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Scottsview3.1.jpg" />
            <CardBody>
              <CardTitle>{product.title}</CardTitle>
            </CardBody>
          </Card>
        );
      })
    ) : (
      <div>no</div>
    );

    return productsList;
  };

  render() {
    return <CardContainer>{this.showProductsList()}</CardContainer>;
  }
}

export default ProductsList;
