import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section company">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/careers">Careers</a></li>
                    </ul>
                </div>

                <div className="footer-section support">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="/help">Help Center</a></li>
                        <li><a href="/faq">FAQs</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h4>Contact</h4>
                    <p>Email: <a href="mailto:info@yourcompany.com">mrirfanhashmi2303@gmail.com</a></p>
                    <p>Phone: +1-234-567-890</p>
                </div>

                <div className="footer-section social">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#" className="social-icon">Facebook</a>
                        <a href="#" className="social-icon">Twitter</a>
                        <a href="#" className="social-icon">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Anonymous. All rights reserved.</p>
            </div>
        </footer>

    )
}

export default Footer
