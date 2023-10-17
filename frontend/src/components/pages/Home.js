import React, { useContext } from "react";
import Slider from "../Slider.js/Slider";
import Mutlislder from "../multiSlider/MultiSlider";
import Card from "../Card/Card";
import { Contextdata } from "../Context/Api";
import "../../App.css";
import Banner from "../banner/Banner";

const Home = () => {

  const Data = useContext(Contextdata)



  return (
    <div className="Home Component">
      <Slider
          image1={"https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50"}
          image2={" https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"}
          image3={"https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50"}
          image4={"https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"}
          image5={"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/Jupiter/Phase1/GW/Cons_P1_PC_3000x1200._CB575916699_.jpg"}
          image6={"https://m.media-amazon.com/images/G/31/img23/Jupiter23/Laptops/Mainstream1_1400x800._CB575801976_.jpg"}
      />


      <Mutlislder id={20} />


      {/* Card Render */}
      <div className="main_Contanier" >
        <div className="card_render">
          {
            Data && Data.filter((item)=> item.ID <= 100 && item.ID >88)
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
        <h2 style={{textAlign:"center", fontSize:"2rem" , fontWeight:"700", margin:"70px 0 20px 0"}}>Sales on Big Billion Day</h2>
        <iframe
             height={"400px"}
             width={"100%"}
             style={{borderRadius:"10px"}}
          src="https://www.youtube.com/embed/ILpzlLFSPKg"
          title="Top 20+ Best Phone Deals for You - Flipkart Big Billion Day 2023"
          frameborder="0"
          allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
          allowfullscreen
        ></iframe>
        <img
          src="https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Eelctronics/Page/Main/Event/Header/Unrec/Header_1500x300_Unrec._CB577605934_.gif"
          alt=""
          height={"500px"}
          width={"100%"}
          className="ads"
        />
      </div>




      <Banner/>

      <Mutlislder id={88}/>
    </div>
  );
};

export default Home;
