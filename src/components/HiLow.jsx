import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Products.css';

export default class Productlist extends React.Component {
  state = {
    products: [],
    type: "All",
  };

  //UseState is a react hook that lets you set some state to react component.

  componentDidMount() {
    axios.get("/products/HightoLow").then((res) => {
      const products = res.data;
      this.setState({ products: products });
    });
  }

  myFilter(type) {
    return () => {
      this.setState({ type });
    };
  }

  render() {
    return (
      <>
        <h1 className="site-title">Products</h1>

        <div className="full-con">
          <div className="prod-container">
            <h4>Filter By Category: </h4>
            <button onClick={this.myFilter("All")}>All</button>
            <button onClick={this.myFilter("Figure")}>Figures</button>
            <button onClick={this.myFilter("Apparel")}>Apparel</button>
            <button onClick={this.myFilter("HomeGoods")}>HomeGoods</button>
          </div>
          <div className="linkContain">
            <h4>Sort By: </h4>
            <Link className="navLink" to="/Products/LowtoHigh">
              Price: Low - High
            </Link>
            <Link className="navLink" to="/Products/HightoLow">
              Price: High - Low
            </Link>
            <Link className="navLink" to="/Products">
              Reset
            </Link>
          </div>
        </div>

        <div className="prod">
          {this.state.products

            .filter((record) => {
              if (this.state.type === "All") {
                return true;
              } else {
                return this.state.type === record.category;
              }
            })

            .map((card) => (
              <div className="products" key={card.id}>
                <img className="img" src={card.image} alt={card.device} />
                <p className="name">{card.name}</p>
                <p className="description">{card.description}</p>
                <p className="price">${card.price}</p>
              </div>
            ))}
        </div>
      </>
    );
  }
}