import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import { Contextdata } from '../Context/Api'
import Card from '../Card/Card';
import Banner from '../banner/Banner';
import Mutlislder from '../multiSlider/MultiSlider';

const Laptop = () => {
  const{brandname} = useParams();

  console.log(brandname)
  const data1 = useContext(Contextdata)

  let filteredData;
   if(brandname === 'apple'){
    filteredData = data1 && data1.filter((item)=> item.brandname === brandname)
   }else if (brandname === "window"){
    filteredData = data1 && data1.filter((item)=> item.brandname === brandname);
   }
   else{
    filteredData = data1
   }

  return(
    <div>

      <div className="main_Contanier" >
        <div className="card_render">
          {
            filteredData && filteredData.filter((item)=> item.ID <= 32 && item.ID > 20)
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
        <h2 style={{textAlign:"center", fontSize:"2rem" , fontWeight:"700", margin:"70px 0 20px 0"}}>Sales On Laptop</h2>
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
          src="https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Eelctronics/Page/COOP/Acer/Creatives/Amazon-Banner-Diwali-Acer-Aspire-5-1500X300._CB575943169_.jpg"
          alt=""
          height={"500px"}
          width={"100%"}
          className="ads"
        />
      </div>

      <Banner/>

      <Mutlislder id={40}/>



    </div>
  )
}

export default Laptop
