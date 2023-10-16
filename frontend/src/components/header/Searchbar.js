import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import "./search.css"
import { useSelector } from "react-redux";
import axios from "axios";


const Searchbar = () => {
  const [name, setname] = useState("");
  const select = useSelector((state) => state.cart.data);
  const userid = localStorage.getItem("userid");
  const filteredItems = select.filter((item) => item.user_id === userid);
  const [data1, setdata] = useState([]);
  const token = localStorage.getItem("token");
  const email =localStorage.getItem("email");
 
  // .split(" ")[0].toUpperCase();
console.log(email)


  useEffect(() => {
    if (name === "") {
      setdata([]);
      return;
    }

    const data = {
      search: name,
    };

    axios
      .post("https://e-shop-api-kmrr.onrender.com/search", data)
      .then((response) => {
        setdata(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[name]);

  const handleChange = (e) => {
    setname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLinkClick = () => {
    // Reset the name state to an empty string when a link is clicked
    setname("");
    window.scroll(0,0)
  };

  const handletoken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("email");
  };

  return (
    <div className="searchbar">
      
      <nav className="navbar navbar-light">

        <div className="container-fluid " >
            {/* Logo  */}
          <NavLink className="navbar-brand" to={"/"} ><h2><span>E</span>Shop</h2></NavLink>

          {/* Search Button  */}

          <div className="cart_and_Sign_In">
            <div className="Sign_In">
              {
                token ? (<Link onClick={handletoken}>Logout</Link>) : (<Link to={"/login"}>SignIn</Link>)
              }
              </div>
            
            <div className="avtar">
              {
                email ?( <Avatar className="avtar " style={{background:"skyblue"}}>{email.split("")[0].toUpperCase()}</Avatar>) : (<Avatar className="avtar "/>)
              }
            </div>
            
            <div className="cart_icon">
              <Link to={"/order"}>
                {
                  filteredItems.length ? (<Badge badgeContent={filteredItems.length} color="primary">
                                            <ShoppingCartIcon id="icon" />
                                          </Badge>)
                                          :
                                          (<Badge badgeContent={0} color="primary">
                                            <ShoppingCartIcon id="icon" />
                                          </Badge>)
                }
              
              </Link>
              

            </div>
          </div>
        </div>

        {/* Search Form  */}
          <form className="Search">

            <div className="input-group" style={{ height: "17px" }}>
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={name}onChange={handleChange}/>
              <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button> 
            </div>

            <div className="list">
            {data1.length > 0 ? (
                <ul>
                  {data1.map((item, index) => (
                    <Link
                      to={"/product/" + item.ID + "/" + item.category}
                      onClick={handleLinkClick} // Call the function to reset name state
                    >
                      <li key={index}>{item.Name}</li>
                    </Link>
                  ))}
                </ul>
            ) : null}
            </div>

        </form>
      </nav>


      
    </div>
  );
};

export default Searchbar;
