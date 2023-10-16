import React from 'react'
import './Home.css'
import DownloadSolo from './components/DownloadSolo';
import AnotherDevices from './components/AnotherDevices';
import PeopleRating from './components/PeopleRating';

export default function index() {
    return (
        <div className='home-container'>
            <DownloadSolo />
            <AnotherDevices />
            <PeopleRating />
        </div>
    )
}
