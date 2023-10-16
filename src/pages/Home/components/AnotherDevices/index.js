import React from 'react'
import "./AnotherDevices.css"
import IosImage from '../../../../assets/images/ios.png';
import MacImage from '../../../../assets/images/mac.png';
import AndroidImage from '../../../../assets/images/android.png';
import WebImage from '../../../../assets/images/web.png';
import WindowImage from '../../../../assets/images/windows.png';

export default function AnotherDevices() {
    return (
        <div className='another-devices-container'>
            <h2 className='main-heading' >Looking for another device?</h2>
            <div className='different-os-container'>
                <div className='os-box'>
                    <img src={IosImage} alt="ios image" />
                    <h1 className='devise-heading'>Solo for iOS</h1>
                    <span className='os-name'>Mobile App</span>
                </div>
                <div className='os-box'>
                    <img src={MacImage} alt="ios image" />
                    <h1 className='devise-heading'>Solo for Mac</h1>
                    <span className='os-name'>Desktop App</span>
                </div>
                <div className='os-box'>
                    <img src={AndroidImage} alt="ios image" />
                    <h1 className='devise-heading'>Solo for Android</h1>
                    <span className='os-name'>Mobile App</span>
                </div>
                <div className='os-box'>
                    <img src={WebImage} alt="ios image" />
                    <h1 className='devise-heading'>Solo for Web</h1>
                    <span className='os-name'>Desktop App</span>
                </div>
                <div className='os-box'>
                    <img src={WindowImage} alt="ios image" />
                    <h1 className='devise-heading'>Solo for Windows</h1>
                    <span className='os-name'>Desktop App</span>
                </div>
            </div>
        </div>
    )
}
