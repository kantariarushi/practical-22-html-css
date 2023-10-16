import React, { useRef } from 'react'
import Slider from "react-slick";
import { Rating } from 'react-simple-star-rating'
import { LiaLongArrowAltRightSolid, LiaLongArrowAltLeftSolid } from 'react-icons/lia'
import "./PeopleRating.css";
import { useMediaQueryXL, useMediaQueryMD } from '../../../../hooks/useMediaQuery';

export default function PeopleRating() {
    const sliderRef = useRef();
    const isDesktop = useMediaQueryXL();
    const isMediumScreen = useMediaQueryMD();
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: !isDesktop ? isMediumScreen ? 2 : 1 : 3,
        slidesToScroll: !isDesktop ? isMediumScreen ? 2 : 1 : 3,
        arrows: false
    };
    return (
        <div className='main-container'>
            <div className='main-heading'>
                <span className='rating-title'>What people are saying</span>
            </div>
            <Slider ref={sliderRef} {...settings}>
                <div className='review-container'>
                    <h2 className='review-text'>“ Solo makes life easierto me. I cancommunicate with the team everywhere. 5 stars!!! ”</h2>
                    <div>
                        <Rating
                            initialValue={5}
                            fillColor='#FF6E30'
                            className='rating'
                            readonly
                            size={!isDesktop ? isMediumScreen ? 25 : 20 : 35}
                        />
                    </div>
                    <div className='writer-name-container'>
                        <span className='writer-name'>Jaida Barton</span>
                        <span className='writer-status'>Visual Designer at UI8</span>
                    </div>
                </div>
                <div className='review-container'>
                    <h2 className='review-text'>“ Solo keeps things simple, the best apps of the year I've ever used. I’ sure that the upcoming updates will be more complete..”</h2>
                    <div>
                        <Rating
                            initialValue={5}
                            fillColor='#FF6E30'
                            className='rating'
                            readonly
                            size={!isDesktop ? isMediumScreen ? 25 : 20 : 35}
                        />
                    </div>
                    <div className='writer-name-container'>
                        <span className='writer-name'>Jadidiah Cassin</span>
                        <span className='writer-status'>Via. Google Play</span>
                    </div>
                </div>
                <div className='review-container'>
                    <h2 className='review-text'>“ I used to have a hard time figuring out how to organize online meetings, Solo helped me to find a great solution!</h2>
                    <div>
                        <Rating
                            initialValue={5}
                            fillColor='#FF6E30'
                            className='rating'
                            readonly
                            size={!isDesktop ? isMediumScreen ? 25 : 20 : 35}
                        />
                    </div>
                    <div className='writer-name-container'>
                        <span className='writer-name'>Fae Schumm</span>
                        <span className='writer-status'>Via. Apple Store</span>
                    </div>
                </div>
                <div className='review-container'>
                    <h2 className='review-text'>“ Solo makes life easierto me. I cancommunicate with the team everywhere. 5 stars!!! ”</h2>
                    <div>
                        <Rating
                            initialValue={5}
                            fillColor='#FF6E30'
                            className='rating'
                            readonly
                            size={!isDesktop ? isMediumScreen ? 25 : 20 : 35}
                        />
                    </div>
                    <div className='writer-name-container'>
                        <span className='writer-name'>Jaida Barton</span>
                        <span className='writer-status'>Visual Designer at UI8</span>
                    </div>
                </div>
                <div className='review-container'>
                    <h2 className='review-text'>“ Solo keeps things simple, the best apps of the year I've ever used. I’ sure that the upcoming updates will be more complete..”</h2>
                    <div>
                        <Rating
                            initialValue={5}
                            fillColor='#FF6E30'
                            className='rating'
                            readonly
                            size={!isDesktop ? isMediumScreen ? 25 : 20 : 35}
                        />
                    </div>
                    <div className='writer-name-container'>
                        <span className='writer-name'>Jadidiah Cassin</span>
                        <span className='writer-status'>Via. Google Play</span>
                    </div>
                </div>
                <div className='review-container'>
                    <h2 className='review-text'>“ I used to have a hard time figuring out how to organize online meetings, Solo helped me to find a great solution!</h2>
                    <div>
                        <Rating
                            initialValue={5}
                            fillColor='#FF6E30'
                            className='rating'
                            readonly
                            size={!isDesktop ? isMediumScreen ? 25 : 20 : 35}
                        />
                    </div>
                    <div className='writer-name-container'>
                        <span className='writer-name'>Fae Schumm</span>
                        <span className='writer-status'>Via. Apple Store</span>
                    </div>
                </div>
            </Slider>
            <div className='button-container'>
                <div onClick={() => sliderRef.current.slickPrev()}><LiaLongArrowAltLeftSolid className="custom-arrow-color light-color left-arrow" /></div>
                <div onClick={() => sliderRef.current.slickNext()}><LiaLongArrowAltRightSolid className="custom-arrow-color dark-arrow" /></div>
            </div>
        </div >
    )
} 
