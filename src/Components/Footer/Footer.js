import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-clean pt-3">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Top Services</h3>
                        <ul>
                            <li><Link to="/details/103">ICU</Link></li>
                            <li><Link to="/details/102">CT SCAN</Link></li>
                            <li><Link to="/details/104">ECHOCARDIOGRAPHY </Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><Link to="/doctors">Doctors</Link></li>
                            <li><Link to="/services">Services</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/apointment">ApointMent</Link></li>
                            <li><Link to="/doctors">Find Doctor</Link></li>
                            <li><Link to="/">Online Report</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social">
                        <Link to="/">
                        <i className="fab fa-facebook"></i>
                            </Link>
                        <Link to="/">
                        <i className="fab fa-twitter-square"></i>
                            </Link>
                        <Link to="/">
                        <i className="fab fa-snapchat"></i>
                            </Link>

                        <p className="copyright">Helth  Care © 20121</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default Footer;