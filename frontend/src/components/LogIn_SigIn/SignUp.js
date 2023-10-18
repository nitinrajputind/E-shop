import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./form.css"



function SignUp() {
  const [data, setdata] = useState(null);
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://e-shop-api-kmrr.onrender.com/register", formData)
      .then((response) => {
        if (response.data.user) {
          setFormData({
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
          });
          nav("/login");
        } else {
          setdata(response.data.msg);
        }
      })
      .catch((error) => {
        console.error("Error registering:", error);
      });
  
  };


  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
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
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            required
          />
        </div>
        <p style={{ color: "red" }}>{data}</p>
        <button type="submit" className="register-button">
          Register
        </button>
        <p className="Already_Account">Already have an account? <span><Link to={"/login"} onClick={()=> window
        .scroll(0,0)} >SignIn</Link></span></p>
      </form>
    </div>
  );
}

export default SignUp;
