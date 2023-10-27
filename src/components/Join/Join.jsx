import React, { useRef } from 'react'
import "./Join.css";
import emailjs from "@emailjs/browser"
import { motion } from 'framer-motion';


const Join = () => {

    const form = useRef();
    const transition = {type: "spring", duration: 3}


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'templateAUTOreply', form.current, 'Eb4oK8zt1zYnRDJFV')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
            form.current.reset();

        });
    };

  return (
      <div className="Join" id='joinUs'>
          <motion.div className="left-j"
          
          transition={{...transition, duration:2}}
          initial={{opacity: 0, x: -100}}
                whileInView={{ opacity: 1, x: 0 }} >
              <hr />
              <div >
                  <span>ESTAS LISTO</span>
                  <span className='stroke-text'>PARA LLEVAR</span>
              </div>
              <div>
                  <span className='stroke-text'>TU CUERPO</span>
                  <span>AL SIGUIENTE NIVEL?</span>
              </div>

          </motion.div>
          <div className="right-j">
              <form
                  ref={form}
                  className='email-container'
                  action=""
                  onSubmit={sendEmail}
              >
                  <input type="email" name='user_email' placeholder='Escribe tu email' />
                  <button className='btn btn-j'>Únete</button>
                  {/* olympusgym62@gmail.com */}
                  </form>
          </div>

      </div>
  )
}

export default Join