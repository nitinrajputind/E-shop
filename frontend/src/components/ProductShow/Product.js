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
      .get("https://e-shop-api-kmrr.onrender.com/dashboard", {
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
      <div className="product_Contanier">


        {data
          .filter((item) => item.ID === parseInt(id))
          .map((item, index) => (


            <div key={index} className="product_Render">

              {/* Image Section Container */}
              <div className="productimage">
                <img src={item.Image} alt="Product" height={"300px"} />
              </div>

              {/* Detail Section Container */}

              <div className="detail">
                <h4>{item.deatilname}</h4>
                <h5 className="Brand_Name"> Brand Name: <span>{item.Name}</span></h5>
                <p className="Brand_Rate"> Brand Rating: <span>{item.Rating}</span></p>
                <p className="BrandSale"> Brand Sales Price: <span>{item.Saleprice}</span></p>
                <p className="BrandMRP"> Brand MRP: <span>{item.MRP}</span></p>
                <p className="Brand_Warranty"> Warranty: <span>{item.Warranty}</span></p>
                <p className="Delivery"> Delivery: <span>{item.Delivery}</span></p>

                <ul className="Bank_Offer">
                  <li>{item.Availabeoffer1}</li>
                  <li>{item.Availabeoffer3}</li>
                  <li>{item.Availabeoffer3}</li>
                </ul>

                {verified ? (
                  <Link onClick={() => handleClick(item, item.ID)}>
                    <button className="AddToCart">Add To Cart</button>
                  </Link>
                ) : (
                  <p>
                    <Link to="/login">
                    <button className="AddToCart">Add To Cart</button>
                    </Link>
                  </p>
                )}
                {verified && (
                  <div>
                    <h1></h1>
                  </div>
                )}
              </div>
                <ToastContainer />
            </div>
          ))}





        {/* Render three components only */}
        <Mutlislder id={100} />

        

      </div>
    </>
  );
}

export default Product;
