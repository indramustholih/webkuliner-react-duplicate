import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="my-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <h5> About Food Paradise </h5>
                        <ul>
                            <li><Link to='#'> About Us </Link></li>
                            <li><Link to='#'> Contact Us </Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h5>Support</h5>
                        <ul> 
                            <li> <Link to='#'> FAQ </Link> </li>
                            <li> <Link to='#'> Help Desk </Link> </li>
                            <li> <Link to='#'> Forums </Link> </li>
                        </ul>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h5>Download App</h5>
                        <ul> 
                            <li> <Link to='#'> Google Play </Link> </li>
                            <li> <Link to='#'> App Store </Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="social-networks">
                <Link className="twitter" to='#'> <i className="fa fa-twitter"> </i> </Link>
                <Link className="facebook" to='#'> <i className="fa fa-facebook-official"></i> </Link>
                <Link className="google" to='#'> <i className="fa fa-google-plus"> </i> </Link>
            </div>
            <div className="text-center footer-copyright">
                <p> Copyright &copy; 2021 Food Paradise </p>
            </div>
        </footer>
    )
}

export default Footer
