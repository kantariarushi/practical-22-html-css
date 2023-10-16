import React from 'react'
import './MakesDifferent.css'
import DownloadSolo from './components/DifferentSolo';
import AnotherDevices from './components/InstantSetUp';
import DifferentPeopleRating from './components/DifferentPeopleRating';
import AskedQuestions from './components/AskedQuestions'

export default function index() {
    return (
        <div>
            <DownloadSolo />
            <AnotherDevices />
            <DifferentPeopleRating />
            <AskedQuestions />
        </div>
    )
}
