import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [menuisActive, setmenuIsActive] = useState(false);

    const toggleHamburger = () => {
        setmenuIsActive(!menuisActive);
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsActive(scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (menuisActive) {
            document.body.classList.add("noscroll");
        } else {
            document.body.classList.remove("noscroll");
        }

        // Cleanup function to ensure class is removed when component unmounts
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [menuisActive]);


    return (
        <section className={`header-wrap ${isActive ? "active" : ""}`}>
            <div className='site-header container'>
                <div className='header-logo'>
                    <NavLink to = "/">
                        <div className='logo-img-wrap'>
                            <img className='logo-img' src="../images/logo.png" alt="" />
                        </div>
                    </NavLink>
                </div>
                <div className={`navbar ${menuisActive ? "" : "hide-navbar"}`}>
                    <ul className='menu'>
                        <li className='menu-item'>
                            <NavLink to = "/" className='menu-link'>home</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink to = "/about" className='menu-link'>about us</NavLink>
                        </li>
                        {/* <li className='menu-item submenu'>
                            <button className='menu-btn'>pages</button>
                             <ul className='submenu-list'>
                                <li className='submenu-item'>
                                    <NavLink to = "/" className='submenu-link'>submenu-1</NavLink>
                                </li>
                                <li className='submenu-item'>
                                    <NavLink to = "/" className='submenu-link'>submenu-1</NavLink>
                                </li>
                                <li className='submenu-item'>
                                    <NavLink to = "/" className='submenu-link'>submenu-1</NavLink>
                                </li>
                                <li className='submenu-item'>
                                    <NavLink to = "/" className='submenu-link'>submenu-1</NavLink>
                                </li>
                             </ul>
                        </li> */}
                        <li className='menu-item'>
                            <NavLink to = "/practicearea" className='menu-link'>practice area</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink to = "/service" className='menu-link'>our services</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink to = "/publication" className='menu-link'>publications</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink to = "/team" className='menu-link'>our team</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink to = "/contact" className='menu-link'>contact us</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='header-contact'>
                    <p className='text'>get free consultation</p>
                    <p className='text'><a href="tel:9851323703" className='contact-num'>9851323703</a></p>
                </div>
                <div className='hamburger-menu'>
                    <div
                        className={`hamburger ${menuisActive ? "is-active" : ""}`}
                        onClick={toggleHamburger}
                        id='hamburger'
                    >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;

