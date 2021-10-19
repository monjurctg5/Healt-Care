import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-clean pt-3">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="/">Mathematics</a></li>
                            <li><a href="/">Applied Mathematics</a></li>
                            <li><a href="/">Engineering Mathematics </a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="/">Teachers</a></li>
                            <li><a href="/">Course</a></li>
                            <li><a href="/">Team</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="/">Job openings</a></li>
                            <li><a href="/">Employee success</a></li>
                            <li><a href="/">Benefits</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social">
                        <a href="/">
                        <i className="fab fa-facebook"></i>
                            </a>
                        <a href="/">
                        <i className="fab fa-twitter-square"></i>
                            </a>
                        <a href="/">
                        <i className="fab fa-snapchat"></i>
                            </a>
                        <a href="/">
                            <i className=" ion-social-instagram"></i>
                        </a>

                        <p className="copyright">Helth  Care © 20121</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default Footer;