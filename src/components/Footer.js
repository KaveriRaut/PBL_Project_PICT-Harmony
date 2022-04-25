import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    <h1> PICT-HARMONY </h1>
                    Interactive Web-Portal to get latest information about PICT
                </p>
                <p className='footer-subscription-text'>
                    Sign Up Now
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name="email" placeholder='your Email' className='footer-input'></input>
                        <Button buttonStyle="btn--outline">Join Now</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/SignInPage'>How it Works</Link>
                        <Link to='/SignInPage'>Investors</Link>
                        <Link to='/SignInPage'>Testimonials</Link>
                        {/* <Link to='/'>Made with ❤ by Web-Team</Link> */}
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/SignInPage'>Contact</Link>
                        <Link to='/SignInPage'>Investors</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>PICT Connect</h2>
                        <a href='https://pict.edu/'>PICT Official Website</a>
                        <a href='https://faculty.pictinc.org/computer/CE-Faculty.aspx'>PICT Faculty</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href='https://www.instagram.com/acm.pict/?hl=en'>Instagram  <i className="fab fa-instagram"></i></a>
                        <a href='https://in.linkedin.com/school/pune-institute-of-computer-technology/'>Linked-In  <i className="fab fa-linkedin"></i></a>
                        <a href='https://www.facebook.com/PICTOfficial'>Facebook  <i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            PICT-HARMONY <i class="fa-solid fa-handshake " />
                        </Link>
                    </div>
                    <small className='website-rights'>PICT-HARMONY © 2022</small>
                    <a href='' className='website-rights'>Made with ❤ by Web-Team</a>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'>
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'>
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className='social-icon-link  linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'>
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'>
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
