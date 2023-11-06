import React from 'react';
import "./Programs.css";
import { programsData } from "../../data/programsData";
import { motion } from 'framer-motion';


const Programs = () => {
    const transition = {type: "spring", duration: 3}
    
  return (
    
      <div className='Programs' id='programsSection'>
          {/* header */}
          <motion.div className="programs-header"
            transition={{...transition, duration:2}}
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}         >
              <span className='stroke-text'>Explora</span>
              <span className='stroke-text'>nuestros </span>
              <span className='stroke-text'>programas</span>
          </motion.div>

          {/* different programs imported from programsData predefined */}
          <motion.div className="program-categories"
        transition={{...transition, duration:2}}
        initial={{opacity: 0, x: 100}}
              whileInView={{ opacity: 1, x: 0 }}  
        >
              {programsData.map((program)=>(
              <div className="category">
                  {program.image}
                  <span>{program.heading}</span>
                      <span>{program.details}</span>
                      
              </div>
             ))}
          </motion.div>
      </div>
  )
}

export default Programs