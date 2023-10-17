import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./multisilder.css";
import { Contextdata } from "../Context/Api";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 768, min: 300 },
    items: 1, // Adjusted to show only 1 item at a time on mobile
    slidesToSlide: 1
  }
};

const Mutlislder = ({ id }) => {
  const data1 = useContext(Contextdata);

  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {data1
          .filter((item) => item.ID < id && item.ID >= id - 8)
          .map((item, index) => {
            return (
              <div className="slider" key={index}>
                <Link to={"/product/" + item.ID + "/" + item.category} onClick={()=>{window.scroll(0,0)}}>
                <img src={item.Image} alt="" />
                </Link>
                <div className="slider_content">
                  <p>Rating :<span>{item.Rating}</span> </p>
                  <h5>Name :<span>{item.Name}</span></h5>
                </div>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Mutlislder;
