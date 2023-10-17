import React from 'react'
import "./payment.css"
import {Link} from "react-router-dom"

const Sucess = () => {
  return (
    <div className='Payment_Contanier'>
      <div className="Sucess_Payment">

        <div className="Sucess_icon">
          <img src="https://png.pngtree.com/png-clipart/20230815/original/pngtree-cashless-payment-for-groceries-2d-vector-isolated-illustration-picture-image_7950451.png" alt="" />
        </div>

        <div className="sucess_message">
        <h2>Order Placed Sucessfuly</h2>
        <h3>Thank you ! </h3>
        <h3>for</h3>
        <h3>Go to More Shopping</h3>
        <p><Link to={"/"}>Click Here</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Sucess
