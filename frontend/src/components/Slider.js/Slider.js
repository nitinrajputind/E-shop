import React from 'react'

function Slider({image1,image2,image3, image4, image5, image6}) {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active carousel-item">
        <img src={image1} className="d-block w-100" height={"350px"} width={"100%"} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={image2} className="d-block w-100" height={"350px"} width={"100%"} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={image3} className="d-block w-100" height={"350px"} width={"100%"} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={image4} className="d-block w-100" height={"350px"} width={"100%"} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={image5} className="d-block w-100" height={"350px"} width={"100%"} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={image6} className="d-block w-100" height={"350px"} width={"100%"} alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider
