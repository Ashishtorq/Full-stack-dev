import React, { Fragment, useState } from "react";
import "./Form.css";
import img from "./images (1).png";
const Form = () => {
  const userData = {
    username: "",
    email: "",
    mobNo: "",
    password: "",
    passwordCNF: "",
  };
  const [user, setUser] = useState(userData);
  const handler = (e) => {
    // e.preventDefault();
    // console.log(e.target.value);
    // console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
    // setUser(e.target.value)
    console.log(setUser);
  };
  return (
    <Fragment>
    <div id="form-group">
    <p>{user.username} has registered successfully</p>
        <img src={img} alt="" />
        <input
          type="text"
          placeholder="username"
          onChange={handler}
          value={user.username}
          name="username"
          autoComplete="off"
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Email"
          onChange={handler}
          value={user.email}
          name="email"
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Mobile No."
          onChange={handler}
          value={user.mobNo}
          name="mobNo"
        />
        <br /> <br />
        <input
          type="password"
          placeholder="Password"
          onChange={handler}
          value={user.password}
          name="password"
        />
        <br /> <br />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={handler}
          value={user.passwordCNF}
          name="passwordCNF"
        />
        <br /> <br />
        <button type="submit"> Sign Up</button>
      </div>
    </Fragment>
  );
};

export default Form;
