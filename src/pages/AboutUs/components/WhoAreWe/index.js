import React from 'react'
import "./WhoAreWe.css"
import cheerful from '../../../../assets/images/cheerful.png';
import youngAndPassionate from '../../../../assets/images/youngAndPassionate.png';
import enthusiasm from '../../../../assets/images/enthusiasm.png';

export default function WhoAreWe() {
    return (
        <div className='who-we-are-container'>
            <span className='use-solo'>Meet solo’s team</span>
            <h2 className='main-heading' >Who we are?</h2>
            <div className='natures-container'>
                <div className='natures-box'>
                    <img src={youngAndPassionate} alt="ios image" />
                    <h1 className='devise-heading'>Young & passionate</h1>
                </div>
                <div className='natures-box'>
                    <img src={enthusiasm} alt="ios image" />
                    <h1 className='devise-heading'>Enthusiasm & creativity</h1>
                </div>
                <div className='natures-box'>
                    <img src={cheerful} alt="ios image" />
                    <h1 className='devise-heading'>Cheerful & comfortable</h1>
                </div>
            </div>
            <div className='who-are-we-divider' />
        </div>
    )
}
