import React from 'react'
import "./MeetTheTeam.css";
import { AiFillHeart } from 'react-icons/ai'
import teamPerson from '../../../../assets/images/teamPerson.png'
import teamPersonOne from '../../../../assets/images/teamPerson-1.png'
import teamPersonTwo from '../../../../assets/images/teamPerson-2.png'
import teamPersonThree from '../../../../assets/images/teamPerson-3.png'

export default function MeetTheTeam() {
    return (
        <div className='team-main-container'>
            <div>
                <div className='heart-container'>
                    <AiFillHeart className="heart-icon" />
                    <span className='team-title'>Meet the team</span>
                </div>
            </div>
            <div className='team-persons-container'>
                <div className='person-container'>
                    <img src={teamPerson} alt="symbol" className='person-image' />
                    <span className='title-name'>Lexie Wolff</span>
                    <span className='role'>Communications Strategist</span>
                </div>
                <div className='person-container'>
                    <img src={teamPersonOne} alt="symbol" className='person-image' />
                    <span className='title-name'>Ida Flatley</span>
                    <span className='role'>Lead Research Producer</span>
                </div>
                <div className='person-container'>
                    <img src={teamPersonTwo} alt="symbol" className='person-image' />
                    <span className='title-name'>Britney Barrows</span>
                    <span className='role'>Implementation Specialist</span>
                </div>
                <div className='person-container'>
                    <img src={teamPersonThree} alt="symbol" className='person-image' />
                    <span className='title-name'>Chelsey Corkery</span>
                    <span className='role'>Forward Interactions Developer</span>
                </div>
                <div className='person-container'>
                    <img src={teamPersonThree} alt="symbol" className='person-image' />
                    <span className='title-name'>Chelsey Corkery</span>
                    <span className='role'>Forward Interactions Developer</span>
                </div>
                <div className='person-container'>
                    <img src={teamPersonTwo} alt="symbol" className='person-image' />
                    <span className='title-name'>Britney Barrows</span>
                    <span className='role'>Implementation Specialist</span>
                </div>
                <div className='person-container'>
                    <img src={teamPerson} alt="symbol" className='person-image' />
                    <span className='title-name'>Lexie Wolff</span>
                    <span className='role'>Communications Strategist</span>
                </div>
                <div className='person-container'>
                    <img src={teamPersonOne} alt="symbol" className='person-image' />
                    <span className='title-name'>Ida Flatley</span>
                    <span className='role'>Lead Research Producer</span>
                </div>
            </div>
        </div >
    )
} 
