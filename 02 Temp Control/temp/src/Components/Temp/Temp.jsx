import React, { Fragment, useState } from "react";
import "./Temp.css";
const Temp = () => {
  const [temp, setTemp] = useState(5);
  const plus = () => {
    setTemp(temp + 1);
  };
  const minus = () => {
    setTemp(temp - 1);
  };
  return (
    <Fragment>
      <div id="containter">
        <div id="screen">
          <h6>{temp}</h6>
        </div>
        <div id="btn">
          <button onClick={plus} style={{ marginRight: "10px" }}>
            <i class="ri-add-box-line"></i>
          </button>
          <button onClick={minus}>
            <i class="ri-subtract-fill"></i>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Temp;
