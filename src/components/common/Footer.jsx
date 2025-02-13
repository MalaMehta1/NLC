import React from 'react';
import { IoCall } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { GiPaperArrow } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <section className='footer-section'>
            <div className='footer-content container'>
                <div className='footer-logo'>
                    <a href="/">
                        <div className='logo-img-wrap'>
                            <img className='logo-img' src="../images/logo.png" alt="" />
                        </div>
                        <h1 className='logo-text'>National Legal Counsel</h1>
                    </a>
                </div>
                <div className='social-link-wrap'>
                    <div className='open-info'>
                        <h3 className='title'>office hours</h3>
                        <p className='day'>sunday to friday</p>
                        <p className='time'>9:30am - 05:30pm</p>
                        <p className='day'>saturday closed</p>
                    </div>
                    <ul className='social-link-list'>
                        <li className='social-link-item'>
                            <a href='https://www.facebook.com/profile.php?id=100089449543905' className="social-link ">
                                <FaFacebookSquare className='facebook-link' />
                            </a>
                        </li>
                        <li className='social-link-item'>
                            <a href='https://www.instagram.com/nationallegalcounsel/' className="social-link ">
                                <FaSquareInstagram className='instagram-link' />
                            </a>
                        </li>
                        <li className='social-link-item '>
                            <a href='https://www.linkedin.com/in/national-legal-counsel-pvt-ltd-433212346/' className="social-link ">
                                <FaLinkedin className='linkedin-link' />
                            </a>
                        </li>
                        <li className='social-link-item '>
                            <a href='https://web.whatsapp.com/' className="social-link ">
                                <FaWhatsappSquare className='whatsapp-link' />
                            </a>
                        </li>
                        <li className='social-link-item '>
                            <a href='https://x.com/nlegalcounsel' className="social-link">
                                <FaSquareTwitter className=' twitter-link' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer-contact'>
                    <div className='title'>contact us</div>
                    <div className='contact-info'>
                        <a href="tel:9851323703" className='contact-num'><IoCall /> <span className='text'>9851323703</span></a>
                    </div>
                    <div className='contact-info'>
                        <a href="mailto:malamehta370@gamil.com"> <IoMailSharp /> <span>info.nationallegalcounsel</span></a>
                    </div>
                    <div className='contact-info'>
                        <div className='mb-2 neutral-50'>Head Office</div>
                        <a href="https://www.google.com/maps/place/Maitighar,+Kathmandu+44600,+Nepal/@27.6924726,85.3225654,677m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39eb19b1ce7d8c61:0x58bb28c5ee006d86!8m2!3d27.6919767!4d85.3229913!16s%2Fg%2F11b6b4bbpy?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D">
                            <FaLocationDot />
                            <address>
                                Maitighar Mandala, East to St.xevier college
                                <br />
                                Kathmandu(Nepal)
                            </address>
                        </a>
                    </div>
                    <div className='contact-info'>
                    <div className='mb-2 neutral-50'>Branch Office - Bara branch</div>
                        <a href="https://maps.app.goo.gl/1UWmEFgZjhYBcpaW8">
                            <FaLocationDot />
                            <address>
                            Jeetpursimara Sub-Metropolitan city-12, Fattepur
                                <br />
                                Bara(Nepal)
                            </address>
                        </a>
                    </div>
                </div>

                <div className='footer-link'>
                    <h3 className='title'>Important Pages</h3>
                    <ul className='footer-menu'>
                        <li className='footer-menu-item'>
                            <NavLink to="/" className="footer-menu-link">
                                <GiPaperArrow />
                                <span className='text'>Home</span>
                            </NavLink>
                        </li>
                        <li className='footer-menu-item'>
                            <NavLink to='/about' className="footer-menu-link">
                                <GiPaperArrow />
                                <span className='text'>about us</span>
                            </NavLink>
                        </li>
                        <li className='footer-menu-item'>
                            <NavLink to='/practicearea' className="footer-menu-link">
                                <GiPaperArrow />
                                <span className='text'>practice area</span>
                            </NavLink>
                        </li>
                        <li className='footer-menu-item'>
                            <NavLink to='/service' className="footer-menu-link">
                                <GiPaperArrow />
                                <span className='text'>our services</span>
                            </NavLink>
                        </li>
                        <li className='footer-menu-item'>
                            <NavLink to='/publication' className="footer-menu-link">
                                <GiPaperArrow />
                                <span className='text'>publications</span>
                            </NavLink>
                        </li>
                        <li className='footer-menu-item'>
                            <NavLink to='/team' className="footer-menu-link">
                                <GiPaperArrow />
                                <span className='text'>our team</span>
                            </NavLink>
                        </li>
                        <li className='footer-menu-item'>
                            <NavLink to='/contact' className="footer-menu-link">
                                <GiPaperArrow />
                                <span className='text'>contact us</span>
                            </NavLink>
                        </li>


                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer