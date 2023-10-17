import React, { useContext } from 'react'
import { Contextdata } from '../Context/Api'
import Card from '../Card/Card'
import Banner from '../banner/Banner'
import Mutlislder from '../multiSlider/MultiSlider'

const Accessories = () => {
  const data1 = useContext(Contextdata)
  return (
    <div>


      <div className="main_Contanier" >
        <div className="card_render">
          {
            data1 && data1.filter((item)=> item.ID <= 80 && item.ID > 68)
            .map((item, index)=>{
              // console.log(item.ID)
              return(
                <Card key={index}
                img = {item.Image}
                id = {item.ID}
                name = {item.Name}
                rating = {item.Rating}
                salePrice = {item.Saleprice}
                branmrp = {item.MRP}
                category = {item.category}
                />
                
              )
            })
          }
        </div>
      </div>


      <div style={{marginTop:"20px"}}>
        <h2 style={{textAlign:"center", fontSize:"2rem" , fontWeight:"700", margin:"70px 0 20px 0"}}>Sales on Accessories</h2>
        <iframe
             height={"400px"}
             width={"100%"}
             style={{borderRadius:"10px"}}
          src="https://www.youtube.com/embed/mWuV75uxgxg"
          title="Top 20+ Best Phone Deals for You - Flipkart Big Billion Day 2023"
          frameborder="0"
          allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
          allowfullscreen
        ></iframe>
        <img
          src="https://m.media-amazon.com/images/G/31/img23/CEPC/jup23/coop/boat/1500x300s._CB575835935_.gif"
          alt=""
          height={"500px"}
          width={"100%"}
          className="ads"
        />
      </div>


      <Banner/>

      <Mutlislder id={68}/>



    </div>
  )
}

export default Accessories
