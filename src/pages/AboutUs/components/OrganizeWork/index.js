import React from 'react'
import './OrganizeWork.css';
import Button from '../../../../components/Button/Button';
import IllustrationImage from '../../../../assets/images/organize-main-image.png';

export default function index() {
    return (
        <div className='organize-container'>
            <h1 className='organize-work'>Organize your work in seconds</h1>
            <img src={IllustrationImage} alt="illustration image" className='organize-img' />
        </div>
    )
}
