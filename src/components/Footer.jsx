import React from 'react';
import '../styles/footer.css'
import facebook from '../images/icons/facebook.png';
import linkedin from '../images/icons/linkedin.png';
import youtube from '../images/icons/youtube.png';

function Footer() {
    return (
        <footer>
            <div className="sectionOne">
                <h5>OTHER INCISIVE MEDIA SITES</h5>
                <div className="splitLine"></div>
                <ul>
                    <li>Corporate</li>
                    <li>Marketing Services</li>
                </ul>
            </div>
            <div className="sectionTwo">
                <h5>LEGAL</h5>
                <div className="splitLine"></div>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Terms & Conditions of use</li>
                    <li>Privacy Policy</li>
                    <li>Cookies Policy</li>
                    <li>Accessibility</li>
                </ul>
            </div>
            <div className="sectionThree">
                <h5>Join Our Community</h5>
                <div className="splitLine"></div>
                <div className="socialIconWrapper">
                    <img src={facebook} alt="facebook"/>
                    <img src={linkedin} alt="linkedin"/>
                    <img src={youtube} alt="youtube"/>
                </div>
                <h5>Find Us</h5>
                <div className="splitLine"></div>
                <ul>
                    <li>Incisive Media</li>
                    <li>New London House</li>
                    <li>172 Drury Lane</li>
                    <li>London WC2B 5QR</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;