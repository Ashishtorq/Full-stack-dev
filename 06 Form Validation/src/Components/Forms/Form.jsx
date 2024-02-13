import React from "react";
import "./Form.css";
import { Fragment } from "react";
import { useState } from "react";
const Form = () => {
    const [name , setName] = useState("")
    const [email,setEmail] = useState("")
    const [pass, setPass] = useState("")
   const handler =(e)=>{
    e.preventDefault()
    console.log(e.target.value)
    if(e.target.name == "name") setName(e.target.value)
    if(e.target.name == "email") setEmail(e.target.value)
    if(e.target.name == "pass") setPass(e.target.value)
    
  } 
  return (
    <Fragment>
      <form action="" id="form">
        <input type="text" id="in" placeholder="Enter Name"  name={name} onChange={handler}/> <br /> <br />
        <input type="Email" id="in" placeholder="Enter Email"   name={email} onChange={handler}/> <br /> <br />
        <input type="password" id="in" placeholder="Enter Password" name={pass}   onChange={handler}/><br /> <br />
        <input type="submit" placeholder="Click here" id="sub"/>
      </form>
    </Fragment>
  );
};

export default Form;
