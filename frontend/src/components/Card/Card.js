/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"



const Card = (prop) => {
  const{img, id, name,rating , salePrice, branmrp , category } = prop
  return (
    <div className="productCard">
      <div className="product_img">
        <img src={img} alt="" />
      </div>
      <div className="Card_Content">
        <div className="CardName">
          <h4>{name}</h4>
          <p className='product_rating'>Rating :<span>{rating}</span> </p>
          <p className='Sale_price'>Brand Sales Price : <span>{salePrice}</span></p>
          <p className='brand_price'>Brand MRP : <span>{branmrp}</span></p>
        </div>
          <Link>
          <button>Add to Cart</button>
          </Link>
      </div>
    </div>
  )
}

export default Card
