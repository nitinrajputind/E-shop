import React from 'react'
import Refund from "../assets/banner_assets/Refund.png"
import shipping from "../assets/banner_assets/shipping.png"
import support from "../assets/banner_assets/support.png"
import "./banner.css"

const Banner = () => {
  return (
    <div className='banner_contanier'>
        <div className="banner_content">

            <div className="banner_item">
            <img src={shipping} alt="shipping" />
            <h5>Free Shipping</h5>
            <p>We Cover Your Shipping Enjoy Free Delivery</p>
            </div>

            <div className="banner_item">
                <img src={Refund} alt="Refund" />
                <h5>100% REFUND</h5>
                <p>The refund you deserve without the wait</p>
            </div>

            <div className="banner_item">
            <img src={support} alt="Support" />
            <h5>24/7 SUPPORT</h5>
            <p>Hearing you is our primary duty </p>
            </div>
        </div>
    </div>
  )
}

export default Banner
