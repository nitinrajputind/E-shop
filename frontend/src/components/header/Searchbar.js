import React from "react";
import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';

import "./search.css"




const Searchbar = () => {
  return (
    <div className="searchbar">
      
      <nav className="navbar navbar-light">

        <div className="container-fluid">
            {/* Logo  */}
          <NavLink className="navbar-brand"><h2><span>E</span>Shop</h2></NavLink>

          {/* Search Button  */}

          <div className="cart_and_Sign_In">
            <div className="Sign_In">
              <NavLink to={"/login"}>SignIn</NavLink>
              </div>
            
            <div className="avtar">
              <Avatar className="avtar "/>
            </div>
            
            <div className="cart_icon">
              <Badge badgeContent={0} color="primary">
                <ShoppingCartIcon id="icon" />
                </Badge>
            </div>
          </div>
        </div>

        {/* Search Form  */}
          <form className="Search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success " type="submit">
              Search
            </button>
          </form>
      </nav>


      
    </div>
  );
};

export default Searchbar;
