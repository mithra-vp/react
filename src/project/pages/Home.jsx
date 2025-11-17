import React from 'react'
// import { Link } from 'react-router-dom';
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa6";
import mypic from '../pages/mypic.jpg';
import web from './web.jpg';
import web2 from './web2.avif';
import web3 from './web3.jpg';

import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='details'>
                <div>
                    <h2>Hey ! I am Mithra VP</h2>
                    <h4>MERN stack Developer</h4>
                    <p>
                        I’m a passionate MERN stack developer who loves turning ideas into reality through code.I build responsive, dynamic, and user-friendly web applications.Focused on clean design, smooth functionality, and great user experience Always eager to learn new technologies and improve my skills.Let’s create something amazing together!
                    </p>
                </div>
                <div className='det'>
                    <img src={mypic} alt="My picture" className='picture' />
                </div>
            </div>

            <div className="cards-container">
                <div className="card">
                    <img src={web} alt="Web Development" />
                    <h3>Web Development</h3>
                    <p>Building responsive, dynamic, and high-performance web applications using the MERN stack.</p>
                </div>

                <div className="card">
                    <img src={web2} alt="UI/UX Design" />
                    <h3>UI / UX Design</h3>
                    <p>Designing clean, user-centered interfaces with seamless user experiences.</p>
                </div>

                <div className="card">
                    <img src={web3} alt="Project Collaboration" />
                    <h3>Project Collaboration</h3>
                    <p>Working together to bring creative ideas to life efficiently and effectively.</p>
                </div>
            </div>
            


        </div>
    )
}

export default Home
