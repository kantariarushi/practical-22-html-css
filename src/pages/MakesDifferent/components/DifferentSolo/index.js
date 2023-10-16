import React, { useRef } from 'react'
import Slider from "react-slick";
import './DifferentSolo.css';
import Button from '../../../../components/Button/Button';
import VideoButton from '../../../../components/VideoButton/VideoButton';
import DifferentSoloImage from '../../../../assets/images/differentSolo.png';
import ToDoListImage from '../../../../assets/images/to-do-list.png';
import { useMediaQueryLG } from '../../../../hooks/useMediaQuery';

export default function DifferentSolo() {
    const sliderRef = useRef();
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.2,
        slidesToScroll: 1.2,
        arrows: false
    };
    const isMobile = useMediaQueryLG();
    return (
        <div>
            <div className='different-container'>
                <h1 className='different-solo'>What makes Solo different?</h1>
                <p className='different-description description-gray'>Organize your tasks, lists and reminders in one app.</p>
                <div className='make-different-button-container'>
                    <Button
                        value="Try it free"
                        className="different-get-button"
                    />
                    <VideoButton
                        value="Watch how it works"
                        className="video-get-button"
                    />
                </div>
                <img src={DifferentSoloImage} alt="different solo image" className='different-img' />
            </div>
            {isMobile ? (<div className='tabs-container'>
                <div className='tab-box'>
                    <img src={ToDoListImage} alt='to-do image' className='different-list-image' />
                    <h2>Your to-do list. Done</h2>
                    <p>
                        4,729 curated design resources to energize your creative work flow
                    </p>
                </div>
                <div className='tab-box'>
                    <img src={ToDoListImage} alt='to-do image' className='different-list-image' />
                    <h2>Your to-do list. Done</h2>
                    <p>
                        4,729 curated design resources to energize your creative work flow
                    </p>
                </div>
                <div className='tab-box'>
                    <img src={ToDoListImage} alt='to-do image' className='different-list-image' />
                    <h2>Your to-do list. Done</h2>
                    <p>
                        4,729 curated design resources to energize your creative work flow
                    </p>
                </div>

            </div>
            ) : (
                <div className='different-slider'>
                    <Slider ref={sliderRef} {...settings}>
                        <div className='tab-box'>
                            <img src={ToDoListImage} alt='to-do image' className='different-list-image' />
                            <h2>Your to-do list. Done</h2>
                            <p>
                                4,729 curated design resources to energize your creative work flow
                            </p>
                        </div>
                        <div className='tab-box'>
                            <img src={ToDoListImage} alt='to-do image' className='different-list-image' />
                            <h2>Your to-do list. Done</h2>
                            <p>
                                4,729 curated design resources to energize your creative work flow
                            </p>
                        </div>
                        <div className='tab-box'>
                            <img src={ToDoListImage} alt='to-do image' className='different-list-image' />
                            <h2>Your to-do list. Done</h2>
                            <p>
                                4,729 curated design resources to energize your creative work flow
                            </p>
                        </div>
                    </Slider>
                </div>
            )}
        </div>
    )
}
