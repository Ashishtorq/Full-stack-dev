import React from "react";
import "./Product.css";
import { Fragment } from "react";
import Data from "../Data.json";
import { useState } from "react";
const Product = () => {
  const [Products, setProducts] = useState(Data);
  const filterHandler = ()=>{
   const fil = Products.filter((e)=>{
     return (
        e.price > 30
     );
   })
   console.log(fil)
    setProducts(fil)
  }
  return (
    <Fragment>
    <button onClick={filterHandler} id="btn">Filter</button>
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
