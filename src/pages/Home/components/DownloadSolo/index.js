import React from 'react'
import './DownloadSolo.css';
import Button from '../../../../components/Button/Button';
import IllustrationImage from '../../../../assets/images/download-solo.png';

export default function index() {
    return (
        <div className='download-container'>
            <span className='use-solo'>ready to use solo?</span>
            <h1 className='download-solo'>Download Solo</h1>
            <p className='download-description description-gray' >By downloading Solo, you accept <a class="download-description" href="#">Term of Use</a> and <a class="download-description" href="#">Privacy & Cookies</a></p>
            <Button
                value="Get Solo for Mac OS"
                className="get-button"
            />
            <img src={IllustrationImage} alt="illustration image" className='download-img' />
        </div>
    )
}
