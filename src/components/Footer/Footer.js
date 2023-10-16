import React from 'react'
import './Footer.css'
import symbol from '../../assets/images/light.png';
import appStore from '../../assets/images/appStore.png';
import playStore from '../../assets/images/playStore.png';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { useMediaQueryXL } from '../../hooks/useMediaQuery';

export default function Footer() {
    const isDesktop = useMediaQueryXL();
    return (
        <div className='footer-container'>
            <div className='main-nav-container'>
                <div className='logo-container'>
                    <div>
                        <img src={symbol} alt="symbol" className='footer-logo' />
                    </div>
                    <p className='join-people'>Join millions of people who organize work and life with solo App.</p>
                </div>
                <div className='nav-container'>
                    <div>
                        <img src={playStore} alt="symbol" className='store-image' />
                        <img src={appStore} alt="symbol" className='store-image' />
                    </div>
                    {isDesktop && <nav class="main-nav">
                        <ul class="main-nav-list">
                            <li><a class="main-nav-link" href="#">Download</a></li>
                            <li><a class="main-nav-link" href="#">Pricing</a></li>
                            <li><a class="main-nav-link" href="#">Features</a></li>
                            <li><a class="main-nav-link" href="#">About Us</a></li>
                            <li><a class="main-nav-link" href="#">Contact</a></li>
                        </ul>
                    </nav>}
                </div>
            </div>
            <div className='divider' />
            <div className='copyright-container'>
                <p className="copyright">
                    &copy; Solo Inc. Designed by UI8 Team.
                </p>
                <ul className="social-links">
                    <li>
                        <a className="footer-link" href="#"
                        ><BsFacebook className="social-icons" /></a>
                    </li>
                    <li>
                        <a className="footer-link" href="#"
                        ><AiOutlineTwitter className="social-icons" /></a>
                    </li>
                    <li>
                        <a className="footer-link" href="#"
                        ><AiOutlineInstagram className="social-icons" /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
