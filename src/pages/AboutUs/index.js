import React from 'react'
import './AboutUs.css'
import OrganizeWork from './components/OrganizeWork';
import WhoAreWe from './components/WhoAreWe';
import MeetTheTeam from './components/MeetTheTeam';

export default function index() {
    return (
        <div className='about-us-container'>
            <OrganizeWork />
            <WhoAreWe />
            <MeetTheTeam />
        </div>
    )
}
