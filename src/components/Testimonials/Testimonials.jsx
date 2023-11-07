import React, {useEffect, useState} from 'react';
import "./Testimonials.css"
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import { motion } from 'framer-motion'

const Testimonials = () => {

const images = [image1, image2, image3, image4, image5, image6];


const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setCurrentImageIndex((prevIndex) =>
prevIndex === images.length - 1 ? 0 : prevIndex + 1
);
}, 1000);

return () => {
clearInterval(interval);
};
}, [images, currentImageIndex]);

return (
<div className='Testimonials'>
        <motion.div className='right'
         transition={{type:"spring", duration:2}}
         initial={{opacity: 0, x: 50}}
               whileInView={{ opacity: 1, x: 0 }}  >
        <h1 className='stroke-text-h1'>RESULTADOS</h1>
    </motion.div>
    <div className='left'>
        <div className='outer-div'> <img className='main-image' src={images[currentImageIndex]} alt="" /></div>
    </div>

</div>
);
};

export default Testimonials;