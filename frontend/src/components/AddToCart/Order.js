/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, removeItem } from "../Redux/Slice/Slice";
import {Divider} from "@mui/material"
import { loadStripe } from "@stripe/stripe-js";
import { Link } from 'react-router-dom'
import "./order.css"

function Order() {
  const select = useSelector((state) => state.cart.data);
  const userid = localStorage.getItem("userid");

  const dispatch = useDispatch(); 


  const handleIncrement = (index) => {
    dispatch(increment(index));
    console.log(index);
  };

  const handleDecrement = (index, num) => {
    if (num === 1) {
      dispatch(removeItem(index));
    }
    dispatch(decrement(index));
    console.log(index);
  };

  const handleRemove = (index) => {
    console.log("Removing item with id:", index);
    dispatch(removeItem(index));
  };

  const pricecal = (item) => {
    // const cleanedPrice = item.replace(/\s/g, "").replace(/[^\d]/g, "");
    // const price = parseInt(cleanedPrice, 10);
    return item.price;
  };

  const cart2 = select.map((item) => ({
    ...item,
    price: parseInt(item.price.replace(/\s/g, "").replace(/[^\d]/g, ""), 10)
      .toString()
      .slice(2, 10),
  }));
  // -----------------------------final---------------------------
  const cart3 = cart2.map((item) => ({
    ...item,
    price: parseInt(item.price),
  }));
  console.log("item in cart", cart3);


  // -------------new--------
  // Filter the items based on user_id
  const filteredItems = cart3.filter((item) => item.user_id === userid);


  const totalQuantity = filteredItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = filteredItems.reduce(
    (total, item) => total +(item.price) * item.quantity,
    0
  );



  //-------------- Paymen Intigration --------------------------
  const makepayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51NCPAYSItp4zxD80Sgt6IQMetdOUyh3Kvs17Thauj56i1IyWYBn2u8byDboYRfA3k9VTPW0qMaYcCif9QtFd3AZQ00rCEMQsVX"
    );

    const body = {
      products: cart3,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://e-shop-api-kmrr.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };





  return (
    <div className="Order_Container">

      <div className="OderProduct">
        <div className="heading">
        <h2>My Cart</h2>
        </div>
        <Divider/>
        
        {/* Product Render */}

        {filteredItems && filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (

          <div key={index} className="container">
            {/* Order Image */}
              <div className="first-cont">
                <img src={item.image} alt="click here" height={"200px"} />
              </div>

              {/* Order Details and Btn */}

              <div className="second-cont">

                <p>Brand-Name: <span>{item.name}</span></p>
                <p className="BrandPrice">Brand-Price: ₹<span>{item.price}</span></p>

                <div className="Order_btn">

                  <div className="incDre_tn">
                  <button className="Left_button" onClick={() => handleDecrement(item.id, item.quantity)}> - </button>
                  <h4 className="value">{item.quantity}</h4>
                  <button className="Right_button" onClick={() => handleIncrement(item.id)}>+</button>
                  </div>
                  
                    <div className="remove">
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>


              </div>
            </div>
          ))
        )

         :

        //  If Card is Empty Then This Conditon render
        (
          <div className="no-items-message">
            <div className="empty-cart">
              <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="Empty Cart" />
             <p><Link to={"/"}>Cart is Empty</Link></p>
            </div>
          </div>
        )}
      </div>

      {/* Product Balance */}

      {filteredItems.length > 0 && (
        <div className="amount">
          <table>
            <tbody>
              <tr>
                <th><h2>Details</h2></th>
              </tr>

              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Price</th>
              </tr>

              {filteredItems.map((item, index) => (
                <tr key={index} className="Item_amount">
                  <td>{" "}No of item <span style={{color : "#d63031"}}>({item.quantity})</span>
                    <br />
                  </td>
                  <td>{item.name.slice(0, 7)}.</td>
                  <td>₹{(item.price) * item.quantity}</td>
                </tr>
              ))}
            </tbody>
            
              <tr>
                <td colSpan={"2"} style={{color:"#2c3e50", fontSize:"1.5rem", fontWeight:"500"}}>Total Amount :</td>
                <td style={{color:"#27ae60",fontSize:"1.5rem", fontWeight:"500"}}> ₹{totalAmount}</td>
              </tr>

          </table>

          <button onClick={makepayment} className="PaymentButton">Place your order</button>

        </div>
      )}


    </div>
  );
}

export default Order;
