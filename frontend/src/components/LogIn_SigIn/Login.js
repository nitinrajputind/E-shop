import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import withRouter
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./form.css"




function Login() {
  const nav = useNavigate();
  const [data, setdata] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://e-shop-api-kmrr.onrender.com/login", formData)
      .then((response) => {
        if (response.data.user) {
          // console.log(response.data.user[0]);
          const email = response.data.user[0]
          const token = response.data.token;
          // console.log(token);
          const usersid = response.data.userid;
          localStorage.setItem("token", token);
          localStorage.setItem("userid", usersid);
          localStorage.setItem("email", email)
          nav("/");
        } else {

          toast(`${response.data.msg}`, {
            position: "top-center"
            });
            console.log(response.data.msg)
          setdata(response.data.msg);
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error.message);

        toast(`${error.message}`, {
          position: "top-center"
        });
        
      });
  };


  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <p style={{ color: "red" }}>{data}</p>

        <button type="submit" className="login-button">
          Login
        </button>

        <br />
        <br />
        <p style={{color:"#2980b9", fontSize:"1rem", fontWeight : "600"}}>New User</p>
        <Link to={"/signup"} onClick={()=>window.scroll(0,0)} >
          <button className="sign-button">Create Your Account</button>
        </Link>
      </form>


      <ToastContainer />

    </div>
  );
}
export default Login;
