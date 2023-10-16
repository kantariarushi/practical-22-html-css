import React from 'react'
import "./ContactUs.css"
import ContactUsImage from '../../assets/images/contact-us.png';
import Button from '../../components/Button/Button';
import { useMediaQueryXL } from '../../hooks/useMediaQuery';

export default function ContactUs() {
    const isDesktop = useMediaQueryXL();
    return (
        <div className='contact-us-main-container'>
            {isDesktop && <img src={ContactUsImage} alt="contact us image" />}
            <div className='form-container'>
                <h1>Contact Us</h1>span
                <span>Questions, bug reports, feedback.</span>
                <form className='form-field-container'>
                    <label>
                        Name:
                        <br />
                    </label>
                    <input placeholder='Enter your email' type="text" name="name" />
                    <br />
                    <label>
                        Email:
                        <br />
                    </label>
                    <textarea rows={"4"} placeholder='Enter a topic like "channel problem..."' type="email" name="email" />
                    <br />
                    <Button
                        value="Send now"
                        className="send-now-button"
                    />
                </form>
            </div>
        </div>
    )
}
