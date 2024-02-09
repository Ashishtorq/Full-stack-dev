import React, { Fragment } from "react";
import "./Content.css";
const Content = () => {
  return (
    <Fragment>
      <div id="container">
        <div id="card">
          <p id="discount">-55%</p>
          <img src="https://source.unsplash.com/200x200/?shoes" alt="shirt" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vero
            reprehenderit cupiditate.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
