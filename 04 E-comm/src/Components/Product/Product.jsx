import React from "react";
import "./Product.css";
import { Fragment } from "react";
import Data from "../Data.json";
import { useState } from "react";
import { useEffect } from "react";
const Product = () => {
  const [Products, setProducts] = useState([]);
  const priceHandler = () => {
    const fil = Products.filter((e) => {
      return e.price > 100;
    });
    console.log(fil);
    setProducts(fil); // fil ko bhi array m rkha tha
  };
  const ratingHandler = () => {
    const ratFil = Products.filter((e) => {
      return e.rating.rate > 3;
    });
    console.log(ratFil);
    setProducts(ratFil); // ratfil ko array m rkha tha
  };
  const api = async () => {
    const proInfo = await fetch("https://fakestoreapi.com/products");
    const proData = await proInfo.json();
    // console.log("proData",proData)
    setProducts(proData);
  };
  useEffect(() => {
    api();
  }, []);
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
              <img src={product.image} alt="thumbnail" />
              <p id="para">{product.title}</p>
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
