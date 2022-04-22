import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="footer-text">
                    <div className="footer-links">
                        <a href="/"> Home |</a>
                        <a href="/project"> Projects </a>
                        <a href="/contact"> | Contact </a>
                    </div>
                    <br />
                    <div className="copyright">
                        <p>
                            &copy; Tony Lee | ALL RIGHTS RESERVED.
                        </p>
                    </div>
                </div>
                <div className="icons">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/facebook.png" alt="facebook" width="50px" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/instagram.png" alt="instagram" width="52px" />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/twitterlogo.png" alt="instagram" width="52px" />
                    </a>
                </div>
            </footer>
        </div>
    )
}
