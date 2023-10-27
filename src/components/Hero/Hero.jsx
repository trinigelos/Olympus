import React from 'react'
import "./Hero.css";
import templo from "../../assets/templo.png";
import { motion } from 'framer-motion'; 

const Hero = () => {
    const transition = { type: "spring", duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className='hero' id='homeSection'>
         
         
          <div className='left-h'>
              
         
              
              {/* hero heading*/}
              <div className='hero-text'>
                  <motion.div
                  
                  initial={{ opacity: 0, translateY: -50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 1.75 }} >
                      <span className='olympus-text'>OLYMPUS </span>
                     
                  </motion.div>
                  <motion.div
                     className='semidioses-text'              
                  initial={{ opacity: 0, translateY: 50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 1.75 }}>
                      <span>FORJANDO SEMIDIOSES</span>
                  </motion.div>
                  
              </div>
         

              
          </div>

         
          <div className='right-h'>
              
             
              {/* hero images */}
              <motion.img
                    animate={{ x: 50 }}
                    transition={{ ease: "easeIn", duration: 2 }}
                   initial={{right:"rem"}}
                   whileInView={{right: "1rem"}}
                  src={templo} alt="" className='hero-image' />
              
            
          </div>
          
    </div>
  )
}

export default Hero
