import React from "react";
import "./Product.css";
import { Fragment } from "react";
import Data from "../Data.json";
import { useState } from "react";
const Product = () => {
  const [Products, setProducts] = useState(Data);
  const priceHandler = () => {
    const fil = Products.filter((e) => {
      return e.price > 100;
    });
    console.log(fil);
    setProducts(fil);
  };
  const ratingHandler = ()=>{
    const ratFil = Products.filter((e)=>{
      e.rating > 3
    })
    console.log([ratFil]);
    setProducts([ratFil]);
  }
  return (
    <Fragment>
      <button onClick={priceHandler} id="btn">
        Filter By Price
      </button>
      <button onClick={ratingHandler} id="btn2">
        Top Rated
      </button>
      <div id="container">
        {Products.map((product) => {
          return (
            <div id="card" key={product.id}>
              <img src={product.thumbnail} alt="thumbnail" />
              <p>{product.title}</p>
              <p>{product.price}</p>
              <button>ADD</button>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Product;
