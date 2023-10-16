import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, removeItem } from "../Redux/Slice/Slice";
import {Divider} from "@mui/material"
import "./order.css"

function Order() {
  const select = useSelector((state) => state.cart.data);
  const userid = localStorage.getItem("userid");

  const dispatch = useDispatch(); 

  // Filter the items based on user_id
  const filteredItems = select.filter((item) => item.user_id === userid);

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
    const cleanedPrice = item.replace(/\s/g, "").replace(/[^\d]/g, "");
    const price = parseInt(cleanedPrice, 10);
    return price;
  };

  const totalAmount = filteredItems.reduce(
    (total, item) => total + pricecal(item.price) * item.quantity,
    0
  );

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
                <p className="BrandPrice">Brand-Price: <span>{item.price}</span></p>

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
              <p>Cart is Empty</p>
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
                  <td>₹{pricecal(item.price) * item.quantity}</td>
                </tr>
              ))}
            </tbody>
            
              <tr>
                <td colSpan={"2"} style={{color:"#2c3e50", fontSize:"1.5rem", fontWeight:"500"}}>Total Amount :</td>
                <td style={{color:"#27ae60",fontSize:"1.5rem", fontWeight:"500"}}> ₹{totalAmount}</td>
              </tr>

          </table>

          <h1>Place your order</h1>

        </div>
      )}


    </div>
  );
}

export default Order;
