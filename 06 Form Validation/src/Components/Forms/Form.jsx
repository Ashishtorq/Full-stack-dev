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
      <form action="">
        <input type="text" placeholder="Enter Name"  name={name} onChange={handler}/>
        <input type="Email" placeholder="Enter Email"   name={email} onChange={handler}/>
        <input type="password" placeholder="Enter Password" name={pass}   onChange={handler}/>
      </form>
    </Fragment>
  );
};

export default Form;
