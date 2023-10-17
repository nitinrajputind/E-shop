import React, { useContext } from 'react'
import { Contextdata } from '../Context/Api'
import Card from '../Card/Card';
import Banner from '../banner/Banner';
import Mutlislder from '../multiSlider/MultiSlider';
import { useParams } from "react-router-dom";



const Mobile = () => {
  const data1 = useContext(Contextdata);
  const { brandname } = useParams();


  let filteredData;

  if (brandname === "iphone") {
    filteredData = data1.filter(item => item.brandname === brandname);
  } else if (brandname === "android") {
    filteredData = data1.filter(item => item.brandname === brandname);
  } else 
  {
    filteredData = data1;
  }

  return (
    <div>
      <div className="main_Contanier" >
        <div className="card_render">
          {
            filteredData && filteredData.filter((item)=> item.ID <= 20 && item.ID > 1)
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
        <h2 style={{textAlign:"center", fontSize:"2rem" , fontWeight:"700", margin:"70px 0 20px 0"}}>Sales On Mobile Phone</h2>
        <iframe
             height={"400px"}
             width={"100%"}
             style={{borderRadius:"10px"}}
          src="https://www.youtube.com/embed/mSSy8hBa4bY"
          title="Top 20+ Best Phone Deals for You - Flipkart Big Billion Day 2023"
          frameborder="0"
          allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
          allowfullscreen
        ></iframe>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/CatPage/JUPITER/Ticker/OP_D80650255_1242x350.gif"
          alt=""
          height={"500px"}
          width={"100%"}
          className="ads"
        />
      </div>


      <Banner/>

      
      <Mutlislder id={8}/>




    </div>
  )
}

export default Mobile
