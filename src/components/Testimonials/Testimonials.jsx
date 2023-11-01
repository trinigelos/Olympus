import React from 'react';
import "./Testimonials.css"
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";

const Testimonials = () => {
const imgs = [image1, image2, image3, image4, image5, image6];

const settings = {
loop: true,
    center: true,
    mode: "gallery",

items: 1,
autoplay: true,
dots: false,
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
                <img className="main-image" src={image} alt={`Img ${index}`} />
            </div>
            ))}
        </TinySlider>
        </div>
        
    <div className='right'>
        <h1 className='stroke-text'>RESULTADOS</h1>
    </div>
</div>
);
};

export default Testimonials;