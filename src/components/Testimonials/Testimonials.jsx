import React from 'react';
import "./Testimonials.css"
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";

const Testimonials = () => {
const imgs = [image1, image2, image3, image4, image5, image6];

const settings = {
loop: true,
    center: true,
    mode: "gallery",

items: 1,
autoplay: true,
dots: true,
autoplayTimeout: 2000,
smartSpeed: 450,
controls: false,

responsive: {},
};

return (
<div className='Testimonials'>

    <div className='left'>
        <TinySlider settings={settings}>
            {imgs.map((image, index) => (
            <div className="m" key={index}>
                <img className="tns-item main-image" src={image} alt={`Img ${index}`} />
            </div>
            ))}
        </TinySlider>
        </div>
        
    <div className='right'>
        <h1 className='stroke-text'>CAMBIOS </h1>
    </div>
</div>
);
};

export default Testimonials;