import React from "react";
import "./Product.css";
import { Fragment } from "react";
import Data from "../Data.json";
import { useState } from "react";
const Product = () => {
  const [Products, setProducts] = useState([]);
  return (
    <Fragment>
      <div id="container">
        {Data.map((data) => {
          return (
            <div id="card" key={data.id}>
              <img src={data.thumbnail} alt="thumbnail" />
              <p>{data.title}</p>
              <p>{data.price}</p>
              <button>ADD</button>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Product;
