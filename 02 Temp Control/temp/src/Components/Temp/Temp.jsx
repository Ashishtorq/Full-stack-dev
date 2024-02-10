import React, { Fragment, useState } from "react";
import "./Temp.css";
const Temp = () => {
  const [temp, setTemp] = useState(5);
  const [color, setColor] = useState("#33495D");
  const [btncolor, setbtncolor] = useState("blanchedalmond");
  
  const plus = () => {
    setTemp(temp + 1);
    if(temp >= 21){
        setColor("orangered")
    }
    if(temp >= 21){
        setbtncolor("orangered");
    }
   

   
  };
  const minus = () => {
    setTemp(temp - 1);
    if(temp <= 22){
        setColor("#33495D");
    }
    if(temp <= 22){
        setbtncolor("#33495D");
    }
  };
  return (
    <Fragment>
      <div id="containter">
        <div id="screen" style={{backgroundColor:color}}>
          <h6 style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
            {temp} <span>°C</span>
          </h6>
        </div>
        <div id="btn">
          <button onClick={plus} style={{ marginRight: "10px", backgroundColor:btncolor }}>
            <i class="ri-add-box-line"></i>
          </button>
          <button onClick={minus} style={{backgroundColor:btncolor}}>
            <i class="ri-subtract-fill"></i>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Temp;
