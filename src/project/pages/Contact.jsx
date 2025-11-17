import React from 'react'
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
  <div className="contact-details">
    <h2><IoMdContact /> +91 9072925020</h2>
    <h2><MdEmail /> mithra1234@gmail.com</h2>
    <p>For more details contact us</p>
  </div>

  <div className="contact-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7830.479007668503!2d76.30758871311193!3d11.095519484434623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba62dc9f9293b95%3A0xb6d175d20a0ccbe1!2sIringattiri%2C%20Kerala%20676523!5e0!3m2!1sen!2sin!4v1762968025074!5m2!1sen!2sin"
      width="400"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  </div>
</div>

  )
}

export default Contact
