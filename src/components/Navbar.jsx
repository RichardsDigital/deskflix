import React from 'react';
import '../styles/navbar.css'
import logo from '../images/logo.png';

function Navbar() {
    
    return (
        <nav>

            <div id="navBanner">
                <div className="navLogo">
                    <img src={logo} alt="logo"/>
                    <div className="navBoxArea">
                        <div className="userBox RegBox">
                            <h5>REGISTER</h5>
                        </div>
                        <div className="userBox LogBox">
                            <h5>LOGIN</h5>
                        </div>
                    </div>
                </div>

                <div className="navText">
                <h1>This Conference</h1>
                <h1>2020</h1>
                </div>
            </div>

            <div id="navBar">
                    <ul>
                        <div className="home">
                            <li>HOME</li>
                        </div>

                        <div className="speakers">
                            <li>SPEAKERS</li>
                        </div>

                        <div className="agenda">
                            <li>AGENDA</li>
                        </div>

                        <div className="whyAttend">
                            <li>WHY ATTEND</li>
                        </div>

                        <div className="contactUs">
                            <li>CONTACT US</li>
                        </div>

                        <div className="entrance">
                            <li>Entrance</li>
                        </div>
                    </ul>
            </div>

        </nav>
    )
}

export default Navbar;