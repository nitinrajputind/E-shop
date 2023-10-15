/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Contextdata } from "../Context/Api";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "../Redux/Slice/Slice";
import { ToastContainer, toast } from "react-toastify";
import Mutlislder from "../multiSlider/MultiSlider";
import "react-toastify/dist/ReactToastify.css";
import "./product.css"



function Product() {
  // Define notify function here at the top-level scope
  const notify = () => toast(`Item is add on cart `);

  // ----------token ---------------verify
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    axios
      .get("/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setVerified(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // --------------------------------------------------------------
  const dispatch = useDispatch();
  const selelct = useSelector((state) => state.cart.data);
  const data = useContext(Contextdata);
  console.log(selelct);

  const { id } = useParams();

  const handleClick = (item, id) => {
    const itemid = id;
    const userid = localStorage.getItem("userid");
    console.log(itemid, userid);

    
    if (verified) {
      dispatch(
        addtocart({
          user_id:userid,
          id: item.ID,
          name: item.Name,
          image: item.Image,
          quantity: item.quantity,
          price: item.Saleprice,
        }),
        notify()
      );
      // Call the notify function here after adding to the cart
    } else {
      alert("Please log in first to add to cart.");
    }
  };

  return (
    <>
      <div className="productdetail1">
        {data
          .filter((item) => item.ID === parseInt(id))
          .map((item, index) => (
            <div key={index} className="productdetail">

              <div className="productimage">
                <img src={item.Image} alt="click here" height={"300px"} />
              </div>
              
              <div className="detail">
                <h4>{item.deatilname}</h4>
                <h5>Brand Name: {item.Name}</h5>
                <p>Brand Rating: {item.Rating}</p>
                <p>Brand Sales Price: {item.Saleprice}</p>
                <p>Brand MRP: {item.MRP}</p>
                <p>Warranty: {item.Warranty}</p>
                <p>Delivery: {item.Delivery}</p>

                <ul>
                  <li>{item.Availabeoffer1}</li>
                  <li>{item.Availabeoffer3}</li>
                  <li>{item.Availabeoffer3}</li>
                </ul>

                {verified ? (
                  <Link onClick={() => handleClick(item, item.ID)}>
                    <button>Add To Cart</button>
                  </Link>
                ) : (
                  <p>
                    <Link to="/login">
                      <button>login first</button>
                    </Link>
                  </p>
                )}
                {verified && (
                  <div>
                    <h1></h1>
                  </div>
                )}
              </div>
            </div>
          ))}
        {/* Render three components only */}
        <Mutlislder id={100} />

        <ToastContainer />
      </div>
    </>
  );
}

export default Product;
