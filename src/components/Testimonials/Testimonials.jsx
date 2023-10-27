import React, { useState } from 'react'
import "./Testimonials.css";
import { testimonialsData } from '../../data/testimonialsData';
import rightArrow from "../../assets/rightArrow.png";
import { motion} from "framer-motion" 


const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    const transition = {type: "spring", duration: 3}

  return (
      <div className='Testimonials' id='testimonialsSection'>
          <motion.div className="testimonials-l"
          transition={{...transition, duration:2}}
          initial={{opacity: 0, x: 50}}
                whileInView={{ opacity: 1, x: 0 }}  
          >
              <span >ANTES Y DESPUES</span>
              <motion.span
              key={selected}
              animate={{opacity: 1, x: 0}}
              initial={{ opacity: 0, x: -100 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{transition}}
              >{testimonialsData[selected].review}</motion.span>
              <span>
                  <span style={{ color: "white" }}>
                      {testimonialsData[selected].name}</span>
               {" "} ~ {testimonialsData[selected].status}
              </span>
             
             
          </motion.div>
          <div className="testimonials-r">
              
              <motion.img
                  key={selected}
                  animate={{opacity: 1, x: 0}}
                  initial={{ opacity: 0, x: 100 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{transition}}

                 src={testimonialsData[selected].image} alt="" />
              <div className="arrows">
                      <img
                       onClick={() => (
                        selected === tLength -1
                            ? setSelected(0)
                            : setSelected((prev) => prev +  1)
                    )}
                      src={rightArrow} alt="" />
              </div>
          </div>
    </div>
  )
}

export default Testimonials