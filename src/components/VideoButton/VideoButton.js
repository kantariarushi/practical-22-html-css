import React from 'react'
import './VideoButton.css'
import { BsFillPlayFill } from 'react-icons/bs'

export default function Button(props) {
    const { value, onClick = () => { }, className } = props;
    return (
        <a className={`video-button-link video-button-cta ${className}`} href="#" onClick={onClick}>
            <BsFillPlayFill className='play-icon' />
            {value}
        </a>
    )
}
