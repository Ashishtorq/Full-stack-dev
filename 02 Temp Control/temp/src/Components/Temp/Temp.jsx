import React, { Fragment, useEffect, useState } from "react";
import "./Temp.css";
const Temp = () => {
  const [temp, setTemp] = useState(5);
  const [color, setColor] = useState("#33495D");
  const [Btncolor, setBtncolor] = useState("blanchedalmond");
  const [btncolor, setbtncolor] = useState("skyblue");
  const [pro, setPro] = useState([])
  
  const plus = () => {
    setTemp(temp + 1);
    if(temp >= 21){
        setColor("orangered")
    }
    if(temp >= 21){
        setBtncolor("orangered");
    }
   

   
  };
  const minus = () => {
    setTemp(temp - 1);
    if(temp <= 22){
        setColor("#33495D");
    }
    if(temp <= 22){
        setbtncolor("skyblue");
    }
  };
  const api = async()=>{
    const proInfo = await fetch("https://fakestoreapi.com/products");
    const proData = await proInfo.json()
    // console.log(proData)
    setPro(proData)
    console.log(pro)
  }
  useEffect(()=>{
    api()
  })

  return (
    <Fragment>
      <div id="containter">
        <div id="screen" style={{ backgroundColor: color }}>
          <h6
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {temp} <span>°C</span>
          </h6>
        </div>
        <div id="btn">
          <button
            onClick={plus}
            style={{ marginRight: "10px", backgroundColor: Btncolor }}
          >
            <i class="ri-add-box-line"></i>
          </button>
          <button onClick={minus} style={{ backgroundColor: btncolor }}>
            <i class="ri-subtract-fill"></i>
          </button>
        </div>
      </div>
     
    </Fragment>
  );
};

export default Temp;
