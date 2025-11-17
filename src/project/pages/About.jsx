import React from 'react';
import mypic from '../pages/mypic.jpg';
import './About.css';


const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I’m <strong>Mithra VP</strong>, a passionate MERN Stack Developer who loves crafting dynamic and visually engaging web experiences. 
            I specialize in building full-stack applications using MongoDB, Express, React, and Node.js. 
            My focus lies in writing clean, scalable, and efficient code that not only performs well but also creates an intuitive user experience.
          </p>
          <p>
            I enjoy transforming ideas into digital realities, from designing modern interfaces to developing powerful backend systems. 
            Learning new technologies and improving my problem-solving skills is something I constantly strive for. 
            I’m always motivated to grow, collaborate, and bring creative ideas to life through code.
          </p>
          <p>
            Outside of coding, I’m curious about design, enjoy exploring UI trends, and like working on personal projects that challenge my creativity. 
            My ultimate goal is to become a well-rounded developer who can build meaningful and impactful products for people around the world.
          </p>
        </div>

        <div className="about-image">
          <img src={mypic} alt="Mithra VP" />
        </div>
      </div>
    </div>
  );
};

export default About;
