import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h3>Mithra VP</h3>
                        <p>
                            Passionate MERN Stack Developer focused on building responsive,
                            interactive, and user-friendly web applications.
                        </p>
                    </div>

                    <div className="footer-section links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section contact">
                        <h4>Contact</h4>
                        <p>Email: mithra@example.com</p>
                        <p>Location: Kerala, India</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Mithra VP. All rights reserved.</p>
                </div>
            </div>
    </div>
  )
}

export default Footer
