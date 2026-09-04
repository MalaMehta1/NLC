import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { IoClose, IoCall } from 'react-icons/io5';
import { siteData, navigationData, contactData } from '../../data';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [menuIsActive, setMenuIsActive] = useState(false);

    const closeMenu = () => setMenuIsActive(false);
    const toggleMenu = () => setMenuIsActive((open) => !open);

    useEffect(() => {
        const handleScroll = () => {
            setIsActive(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuIsActive) {
            document.body.classList.add('noscroll');
        } else {
            document.body.classList.remove('noscroll');
        }

        return () => {
            document.body.classList.remove('noscroll');
        };
    }, [menuIsActive]);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') closeMenu();
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    return (
        <section className={`header-wrap ${isActive ? 'active' : ''} ${menuIsActive ? 'menu-open' : ''}`}>
            <div className='site-header container'>
                <div className='header-logo'>
                    <NavLink to="/" onClick={closeMenu}>
                        <div className='logo-img-wrap'>
                            <img className='logo-img' src={siteData.logo} alt={siteData.firmName} />
                        </div>
                    </NavLink>
                </div>

                <div
                    className={`mobile-nav-backdrop ${menuIsActive ? 'is-visible' : ''}`}
                    onClick={closeMenu}
                    aria-hidden={!menuIsActive}
                />

                <nav className={`navbar ${menuIsActive ? 'is-open' : 'hide-navbar'}`} aria-label="Main navigation">
                    <div className='mobile-nav-top'>
                        <div className='mobile-nav-brand'>
                            <img src={siteData.logo} alt="" className='mobile-nav-logo' />
                            <div>
                                <p className='mobile-nav-title'>{siteData.firmName}</p>
                                <p className='mobile-nav-tagline'>{siteData.tagline}</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className='mobile-nav-close'
                            onClick={closeMenu}
                            aria-label="Close menu"
                        >
                            <IoClose />
                        </button>
                    </div>

                    <ul className='menu'>
                        {navigationData.links.map((link, index) => (
                            <li
                                className='menu-item'
                                key={link.path}
                                style={{ '--item-index': index }}
                            >
                                <NavLink
                                    to={link.path}
                                    className='menu-link'
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='header-contact'>
                    <p className='text'>{siteData.consultationCta}</p>
                    <p className='text'>
                        <a href={`tel:${contactData.phone}`} className='contact-num contact-num--blink'>
                            <IoCall className='contact-num__icon' aria-hidden="true" />
                            <span>{contactData.phone}</span>
                        </a>
                    </p>
                </div>

                <div className='hamburger-menu'>
                    <button
                        type="button"
                        className={`hamburger ${menuIsActive ? 'is-active' : ''}`}
                        onClick={toggleMenu}
                        id='hamburger'
                        aria-label={menuIsActive ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuIsActive}
                    >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header;
