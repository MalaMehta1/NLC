import React from 'react';
import { IoCall, IoMailSharp, IoChevronForward } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { siteData, navigationData, contactData } from '../../data';

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
  twitter: FaXTwitter,
};

const Footer = () => {
  const { officeHours, offices, social, phone, email, emailMailto } = contactData;
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content container">
        <div className="footer-brand">
          <NavLink to="/" className="footer-logo" aria-label={siteData.firmName}>
            <div className="logo-img-wrap">
              <img className="logo-img" src={siteData.logo} alt={siteData.firmName} />
            </div>
          </NavLink>
          <p className="footer-tagline">{siteData.tagline}</p>
          <ul className="social-link-list">
            {social.map((item) => {
              const Icon = socialIcons[item.platform];
              if (!Icon) return null;
              return (
                <li className="social-link-item" key={item.platform}>
                  <a
                    href={item.url}
                    className={`social-link social-link--${item.platform}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.platform}
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="footer-col footer-hours">
          <h3 className="footer-title">{officeHours.title}</h3>
          <p className="footer-text footer-text--strong">{officeHours.days}</p>
          <p className="footer-text">{officeHours.time}</p>
          <p className="footer-badge">{officeHours.closed}</p>
        </div>

        <div className="footer-col footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <a href={`tel:${phone}`} className="footer-contact-link">
            <IoCall aria-hidden="true" />
            <span>{phone}</span>
          </a>
          <a href={emailMailto} className="footer-contact-link">
            <IoMailSharp aria-hidden="true" />
            <span>{email}</span>
          </a>
          {offices.map((office) => (
            <a
              key={office.label}
              href={office.mapUrl}
              className="footer-office"
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer-office__label">{office.label}</span>
              <span className="footer-office__row">
                <FaLocationDot aria-hidden="true" />
                <address>
                  {office.lines.map((line, index) => (
                    <React.Fragment key={line}>
                      {index > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </address>
              </span>
            </a>
          ))}
        </div>

        <div className="footer-col footer-link">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-menu">
            {navigationData.links.map((link) => (
              <li className="footer-menu-item" key={link.path}>
                <NavLink to={link.path} className="footer-menu-link">
                  <IoChevronForward aria-hidden="true" />
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom__inner container">
          <p className="footer-copy">
            © {year} {siteData.firmName}. All rights reserved.
          </p>
          {siteData.disclaimer ? (
            <p className="footer-disclaimer">{siteData.disclaimer}</p>
          ) : null}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
