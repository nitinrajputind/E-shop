import React,{useContext} from 'react'
import { Contextdata } from '../Context/Api'
import Card from '../Card/Card';
import Banner from '../banner/Banner';
import Mutlislder from '../multiSlider/MultiSlider';

const Tablet = () => {
  const data1 =useContext(Contextdata);

  return (
    <div>


      {/* Card Render */}
      <div className="main_Contanier" >
        <div className="card_render">
          {
            data1 && data1.filter((item)=> item.ID <= 60 && item.ID >48)
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
        <h2 style={{textAlign:"center", fontSize:"2rem" , fontWeight:"700", margin:"70px 0 20px 0"}}>Sales on Tablets</h2>
        <iframe
             height={"400px"}
             width={"100%"}
             style={{borderRadius:"10px"}}
          src="https://www.youtube.com/embed/8BV0ET8USTM"
          title="Top 20+ Best Phone Deals for You - Flipkart Big Billion Day 2023"
          frameborder="0"
          allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
          allowfullscreen
        ></iframe>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/tablets/onepluspadgo/1500x300.jpg"
          alt=""
          height={"500px"}
          width={"100%"}
          className="ads"
        />
      </div>

      <Banner/>

      <Mutlislder id={48}/>

    </div>
  )
}

export default Tablet
