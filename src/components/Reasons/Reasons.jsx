import React from 'react'
import "./Reasons.css"
import { motion } from 'framer-motion'


const Reasons = () => {
    const transition = {type: "spring", duration: 3}

  return (
      <div className='Reasons' id='whyUsSection'>
          
          <div className="right-r">
              

              <motion.div 
              transition={{...transition, duration:2}}
              initial={{opacity: 0, x: 50}}
                    whileInView={{ opacity: 1, x: 0 }}  
              >
                  <span className='whitey'>QUIENES </span>
                  <span className='whitey '>SOMOS?</span>
              </motion.div>


              
          </div>

          <div className='video'></div>

      </div>
  )
}

export default Reasons