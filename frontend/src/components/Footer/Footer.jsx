import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div
            className="footer"
            id="footer"
        >
            <div className="footer-content">
                <div className="footer-content-left">
                    <img
                        className="logo"
                        src={assets.logowhite}
                        alt=""
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt perferendis, molestiae iusto quae quis magnam
                        harum odit incidunt earum doloribus alias laborum cumque
                        cum sunt consequuntur expedita ea voluptatem provident.
                    </p>
                    <div className="footer-social-icons">
                        <a href="facebook.com">
                            
                        <img
                            src={assets.facebook_icon}
                            alt=""
                        />
                        </a>
                        <a href="twitter.com">
                        <img
                            src={assets.twitter_icon}
                            alt=""
                        />
                            
                        </a>
                        <a href="linkedin.com">
                            
                        <img
                            src={assets.linkedin_icon}
                            alt=""
                        />
                        </a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+2348069505596</li>
                        <li>hypertechsolutionshelpdesk@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright © Hypertech Solutions - All Right Reserved.
            </p>
        </div>
    );
};

export default Footer;
