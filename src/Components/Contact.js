import React, { useState } from 'react';
import './Contact.css';
import location from '../Assests/location.svg'
import mail from '../Assests/gmail.svg'
import whatsapp from '../Assests/whatsapp.svg'
import emailjs from 'emailjs-com';

function Contact()
{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
          ...formData,
          [id]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        };
    
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_EMAILJS_USER_ID
        ).then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully');
          },
          (err) => {
            console.log('FAILED...', err);
            alert('Failed to send message. Please try again later.');
          }
        );
    
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      };
    return(
        <div class="Conatct">
          <div class="contact">
            <div class="contact-details">
              
              <img class="first-img svg" src={whatsapp} alt="" />
              <h3>Whatsapp No</h3>
              <a href="https://wa.me/8240769404"><p>8240769404</p></a>
              <img src={mail} alt="" class="svg"/>
              <h3>Email Address</h3>
              <a href="mailto:spati711@gmail.com"><p>spati711@gmail.com</p></a>
              <img src={location} alt="" class="svg"/>
              <h3>Address</h3>
              <p>AE-190, Rabindrapally,</p>
              <p>Kestopur, Kolkata-700101</p>
            </div>
            <div class="contact-form">
              <form onSubmit={handleSubmit} class="contact-form">
                <h3>Get In Touch</h3>
                <input type="text" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required/>
                <input type="email" id="email" placeholder="Email Id" value={formData.email} onChange={handleChange} required/>
                <input type="text" id="phone" placeholder="Phone no" value={formData.phone} onChange={handleChange} required/>
                <textarea id="message" rows="4" placeholder="How can I help you" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default Contact;