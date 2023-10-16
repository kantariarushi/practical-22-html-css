import React from 'react'
import './Button.css'

export default function Button(props) {
    const { value, onClick = () => { }, className } = props;
    return (
        <a className={`button-link button-cta ${className}`} href="#" onClick={onClick}>
            {value}
        </a>
    )
}
