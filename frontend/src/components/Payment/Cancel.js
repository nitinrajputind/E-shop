import React from 'react'
import { Link } from 'react-router-dom'


const Cancel = () => {
  return (
    <div className='Payment_Contanier'>
      <div className="Sucess_Payment">

        <div className="Sucess_icon">
          <img src="https://png.pngtree.com/png-clipart/20230923/original/pngtree-payment-error-2d-vector-isolated-illustration-design-woman-icon-vector-png-image_12578533.png" alt="" />
        </div>

        <div className="sucess_message">
        <h2>Order Payment is Cancelled</h2>
        <h3>Serevr Error !  </h3>
        <h3>Time Out </h3>
        <h3>For Help!Plese Contact Us</h3>
        <p><Link to={"/"}>Click Here</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Cancel
