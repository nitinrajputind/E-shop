import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, removeItem } from "../Redux/Slice/Slice";
import empty from "../assets/cart/emptycart.webp";
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
    <div className="parent-cont">
      <div className="child-cont">
        {filteredItems && filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="container">
              <div className="first-cont">
                <img src={item.image} alt="click here" height={"200px"} />
              </div>
              <div className="second-cont">
                <p>Brand-Name: {item.name}</p>
                <p>Brand-Price: {item.price}</p>
                <div>
                  <button
                    className="button"
                    onClick={() => handleDecrement(item.id, item.quantity)}
                  >
                    -
                  </button>
                  <h4 className="value">{item.quantity}</h4>
                  <button
                    className="button"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="remove">
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-items-message">
            <div className="empty-cart">
              <img src={empty} alt="Empty Cart" />
              <p>Cart is Empty</p>
            </div>
          </div>
        )}
      </div>
      {filteredItems.length > 0 && (
        <div className="amount">
          <table>
            <tbody>
              <tr>
                <th>
                  <h2>Price Detail</h2>
                </th>
              </tr>
              <tr>
                <th>Number Of Item</th>
                <th>Brand Name</th>
                <th>Price</th>
              </tr>
              {filteredItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    {" "}
                    No of item ({item.quantity})
                    <br />
                  </td>
                  <td>{item.name.slice(0, 8)}...</td>
                  <td>₹{pricecal(item.price) * item.quantity}</td>
                </tr>
              ))}

              <tr>
                <td colSpan={"2"}>Total Amount :</td>

                <td> ₹{totalAmount}</td>
              </tr>
            </tbody>
          </table>
          <h1>Place your order</h1>
        </div>
      )}
    </div>
  );
}

export default Order;
