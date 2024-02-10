import React, { Fragment } from "react";
import "./Content.css";
const Content = (prop) => {
  // const a = prop.name
  return (
    <Fragment>
      <div id="container">
        <div id="card">
          <p id="discount">{prop.discount}</p>
          <img src="https://source.unsplash.com/300x400/?sunglasses" alt="shirt" />
          <p>
            Lorem ipsum dolor sit {prop.name}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
