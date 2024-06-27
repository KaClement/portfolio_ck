import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_06a3kfe', 'template_7287oan', form.current, '9P2H5a__Q_LKXv3RV')
    e.target.reset()
  };

  return (
    <section id='contact'>
      
      <h2>Contact</h2>
      
      <div className="container contact__container">
        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icons'/>
            <h4>Email</h4>
            <h5>clemKacel@gmail.com</h5>
            <a href="mailto:clemkacel@gmail.com" target='_blank'>Envoyer un message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icons' />
            <h4>Message Linkedin</h4>
            <h5>Clément Kacel</h5>
            <a href="https://linkedin.com"> Envoyer un message</a>
          </article>
          


        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nom complet' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required/>
          <button type='submit' className='btn btn-primary'>Envoyer le message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact