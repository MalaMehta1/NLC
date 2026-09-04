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
import { siteData, navigationData, contactData } from '../../data';

const socialIcons = {
    facebook: FaFacebookSquare,
    instagram: FaSquareInstagram,
    linkedin: FaLinkedin,
    whatsapp: FaWhatsappSquare,
    twitter: FaSquareTwitter,
};

const Footer = () => {
    const { officeHours, offices, social, phone, email, emailMailto } = contactData;

    return (
        <section className='footer-section'>
            <div className='footer-content container'>
                <div className='footer-logo'>
                    <a href="/">
                        <div className='logo-img-wrap'>
                            <img className='logo-img' src={siteData.logo} alt={siteData.firmName} />
                        </div>
                        <h1 className='logo-text'>{siteData.firmName}</h1>
                    </a>
                </div>
                <div className='social-link-wrap'>
                    <div className='open-info'>
                        <h3 className='title'>{officeHours.title}</h3>
                        <p className='day'>{officeHours.days}</p>
                        <p className='time'>{officeHours.time}</p>
                        <p className='day'>{officeHours.closed}</p>
                    </div>
                    <ul className='social-link-list'>
                        {social.map((item) => {
                            const Icon = socialIcons[item.platform];
                            if (!Icon) return null;
                            return (
                                <li className='social-link-item' key={item.platform}>
                                    <a href={item.url} className="social-link ">
                                        <Icon className={`${item.platform}-link`} />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='footer-contact'>
                    <div className='title'>contact us</div>
                    <div className='contact-info'>
                        <a href={`tel:${phone}`} className='contact-num'><IoCall /> <span className='text'>{phone}</span></a>
                    </div>
                    <div className='contact-info'>
                        <a href={emailMailto}> <IoMailSharp /> <span>{email}</span></a>
                    </div>
                    {offices.map((office) => (
                        <div className='contact-info' key={office.label}>
                            <div className='mb-2 neutral-50'>{office.label}</div>
                            <a href={office.mapUrl}>
                                <FaLocationDot />
                                <address>
                                    {office.lines.map((line, index) => (
                                        <React.Fragment key={line}>
                                            {index > 0 && <br />}
                                            {line}
                                        </React.Fragment>
                                    ))}
                                </address>
                            </a>
                        </div>
                    ))}
                </div>

                <div className='footer-link'>
                    <h3 className='title'>Important Pages</h3>
                    <ul className='footer-menu'>
                        {navigationData.links.map((link) => (
                            <li className='footer-menu-item' key={link.path}>
                                <NavLink to={link.path} className="footer-menu-link">
                                    <GiPaperArrow />
                                    <span className='text'>{link.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer
