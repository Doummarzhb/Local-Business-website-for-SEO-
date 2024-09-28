import Slider from "react-slick";
import React from "react";
import { Helmet } from 'react-helmet'; //  Helmet
import "./Hero.css"; 
import { FaShoppingCart, FaCogs, FaRocket } from "react-icons/fa";   

import Image1 from "../../assets/instimage.jpeg";
import Image2 from "../../assets/instimage.jpeg";
import Image3 from "../../assets/instimage.jpeg";
import Service from "../Service/Service";

const HeroSlide = [
  {
    id: 1,
    icon: <FaShoppingCart />,   
    name: Image1,
    subtitle: "POS Services",
    title: "Enhance",
    title2: "Your Business",
    description: "We strive to deliver the best experience to our customers by offering high-quality products and excellent customer service.",
  },
  {
    id: 2,
    icon: <FaCogs />,
    name: Image2,
    subtitle: "Advanced Solutions",
    title: "Tailored",
    title2: "For You",
    description: "We offer a variety of point-of-sale services that help enhance business performance, streamline operations, and increase productivity.",
  },
  {
    id: 3,
    icon: <FaRocket />, 
    name: Image3,
    subtitle: "POS for Growth",
    title: "Empower",
    title2: "Your Success",
    description: "Discover how HamsterPOS can empower your business with efficient, easy-to-use solutions that grow with you.",
  },
];

const Hero = () => {
    const settings = {
        dots: true, 
        arrows: true,  
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  
        autoplaySpeed: 4000, 
        pauseOnHover: true, 
        cssEase: "ease-in-out",
        swipe: true,  
        touchMove: true,  
      };

  return (
    <div className="container">
      <Helmet>
        <title>Welcome to HamsterPOS</title>
        <meta name="description" content="Discover our POS services to enhance your business performance and customer satisfaction." />
        <meta name="keywords" content="POS, Business Solutions, Customer Service" />
      </Helmet>
      <div className="hero-section hero-section-sm">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroSlide.map((data) => (
              <div key={data.id} className="grid grid-cols-1 sm:grid-cols-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                  <div className="hero-text">
                    <div className="hero-icon">{data.icon}</div>  
                    <h2>{data.subtitle}</h2>
                    <h1>{data.title}</h1>
                    <h1 className="hero-text-upper">{data.title2}</h1>
                    <p className="hero-description">{data.description}</p>
                    <div>
                      <button className="hero-button">Contact US ..</button>
                    </div>
                  </div>
                  {/* Uncomment the image section if needed */}
                  {/* <div className="flex items-center justify-center">
                    <img
                      src={data.name}
                      alt={data.subtitle}
                      className="hero-image"
                    />
                  </div> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
    </div>
    
  );
};

export default Hero;
