import React, { useState } from 'react'
import './Header.css'
import symbol from '../../assets/images/light.png';
import illustration from '../../assets/images/illustration.png';
import { useMediaQueryXL } from '../../hooks/useMediaQuery';
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'

export default function Header() {
    const isDesktop = useMediaQueryXL();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='row'>
                    <img src={symbol} alt="symbol" className='logo' />
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
            {isDesktop ? <div className='header'>
                <nav>
                    <ul class="main-nav-list">
                        <li><a class="main-nav-link" href="#">Login</a></li>
                        <li><a class="main-nav-link nav-cta" href="#">Sign up</a></li>
                    </ul>
                </nav>
            </div> : <GiHamburgerMenu onClick={() => setIsOpen(true)} className='header burger-icon-container' />}
            {isOpen &&
                <>
                    <div onClick={() => setIsOpen(false)} className={`burger-container-mobile open`}>
                        <div onClick={(e) => e.stopPropagation()} className='burger-container'>
                            <div>
                                <div className='logo-container-mobile'>
                                    <img src={symbol} alt="symbol" className='logo' />
                                    <RxCross1 onClick={() => setIsOpen(false)} className='cross-icon' />
                                </div>
                                <nav class="mobile-main-nav">
                                    <ul class="mobile-main-nav-list">
                                        <li><a onClick={() => setIsOpen(false)} class="mobile-main-nav-link" href="#">Download</a></li>
                                        <li><a onClick={() => setIsOpen(false)} class="mobile-main-nav-link" href="#">Pricing</a></li>
                                        <li><a onClick={() => setIsOpen(false)} class="mobile-main-nav-link" href="#">Features</a></li>
                                        <li><a onClick={() => setIsOpen(false)} class="mobile-main-nav-link" href="#">About Us</a></li>
                                        <li><a onClick={() => setIsOpen(false)} class="mobile-main-nav-link" href="#">Contact</a></li>
                                    </ul>
                                </nav>
                                <img src={illustration} alt='illustration' className='illustration-logo' />
                            </div>
                            <div className='button-container'>
                                <nav>
                                    <ul class="main-nav-list">
                                        <li><a onClick={() => setIsOpen(false)} class="main-nav-link nav-cta" href="#">Sign up</a></li>
                                        <li><a onClick={() => setIsOpen(false)} class="main-nav-link mobile-login" href="#">Log in</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
