import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const TeamCard = () => {
    return (
        <div className="team-card flex gap-10 flex-wrap flex-c-c">
            <div className="box shadow-sm">
                <div className="image-wrapper flex">
                    <img className="img-fluid" src="../images/team/image-1.jpeg" alt="..." />
                </div>
                <div className="box-desc">
                    <h5>Ramprawesh Yadav </h5>
                    <div>Founding partner...</div>
                    <div>9820772703</div>
                    {/* <p>ramprawesh.advocate@gmail.com</p> */}
                </div>
                <ul className="social flex-c-c gap-3">

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
                </ul>
            </div>
            <div className="box shadow-sm">
                <div className="image-wrapper flex">
                    <img className="img-fluid" src="../images/team/image-2.jpeg" alt="..." />
                </div>
                <div className="box-desc">
                    <h5>Ranjana Raut </h5>
                    <div>Associate </div>
                    <div>9802355291</div>
                    {/* <p>ranzanaraut@gmail.com</p> */}
                </div>
                <ul className="social flex-c-c gap-3">
                    <li className='social-link-item'>
                        <a href='https://www.facebook.com/people/Ranjana-Raut/pfbid0o93qGujo4Z8mCCqhvXUXfpgyeVX8nWWtym6ngoyqrCBCvSDwe5LdneATZp2b26BLl/?rdid=EvFyCmMqrTHJbbFl&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B8KGzirGn%2F' className="social-link ">
                            <FaFacebookSquare className='facebook-link' />
                        </a>
                    </li>
                    <li className='social-link-item'>
                        <a href='https://www.instagram.com/accounts/login/?next=%2Franzhanaraut%2F&source=omni_redirect' className="social-link ">
                            <FaSquareInstagram className='instagram-link' />
                        </a>
                    </li>
                    <li className='social-link-item '>
                        <a href='https://www.linkedin.com/in/ranjana-raut-16467b26a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="social-link ">
                            <FaLinkedin className='linkedin-link' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default TeamCard