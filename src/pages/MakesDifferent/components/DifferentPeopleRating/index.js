import React, { useRef } from 'react'
import Slider from "react-slick";
import { Rating } from 'react-simple-star-rating'
import { LiaLongArrowAltRightSolid, LiaLongArrowAltLeftSolid } from 'react-icons/lia'
import "./DifferentPeopleRating.css";
import { useMediaQueryXL, useMediaQueryMD } from '../../../../hooks/useMediaQuery';
import Person from '../../../../assets/images/person.png';

export default function DifferentPeopleRating() {
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
        <div className='different-main-container'>
            <div className='different-main-heading'>
                <span className='different-rating-title'>What people are saying</span>
            </div>
            <Slider ref={sliderRef} {...settings}>
                <div className='different-review-container'>
                    <div className='different-review-box'>
                        <h2 className='different-review-text'>“ Solo is a powerful app that can connect a lot of services I’m using. It is so flexible!”</h2>
                        <div>
                            <Rating
                                initialValue={5}
                                fillColor='#FF6E30'
                                className='rating'
                                readonly
                                size={!isDesktop ? isMediumScreen ? 25 : 20 : 35}
                            />
                        </div>
                    </div>
                    <div className='different-writer-name-container'>
                        <img src={Person} alt="person" />
                        <div className='column'>
                            <span className='different-writer-name'>Jaida Barton</span>
                            <span className='different-writer-status'>2 days ago</span>
                        </div>
                    </div>
                </div>
                <div className='different-review-container'>
                    <div className='different-review-box'>
                        <h2 className='different-review-text'>“ Solo is a powerful app that can connect a lot of services I’m using. It is so flexible!”</h2>
                        <div>
                            <Rating
                                initialValue={5}
                                fillColor='#FF6E30'
                                className='rating'
                                readonly
                                size={!isDesktop ? isMediumScreen ? 25 : 20 : 35}
                            />
                        </div>
                    </div>
                    <div className='different-writer-name-container'>
                        <img src={Person} alt="person" />
                        <div className='column'>
                            <span className='different-writer-name'>Jaida Barton</span>
                            <span className='different-writer-status'>2 days ago</span>
                        </div>
                    </div>
                </div>
                <div className='different-review-container'>
                    <div className='different-review-box'>
                        <h2 className='different-review-text'>“ Solo is a powerful app that can connect a lot of services I’m using. It is so flexible!”</h2>
                        <div>
                            <Rating
                                initialValue={5}
                                fillColor='#FF6E30'
                                className='rating'
                                readonly
                                size={!isDesktop ? isMediumScreen ? 25 : 20 : 35}
                            />
                        </div>
                    </div>
                    <div className='different-writer-name-container'>
                        <img src={Person} alt="person" />
                        <div className='column'>
                            <span className='different-writer-name'>Jaida Barton</span>
                            <span className='different-writer-status'>2 days ago</span>
                        </div>
                    </div>
                </div>
                <div className='different-review-container'>
                    <div className='different-review-box'>
                        <h2 className='different-review-text'>“ Solo makes life easierto me. I cancommunicate with the team everywhere. 5 stars!!! ”</h2>
                        <div>
                            <Rating
                                initialValue={5}
                                fillColor='#FF6E30'
                                className='rating'
                                readonly
                                size={!isDesktop ? isMediumScreen ? 25 : 20 : 35}
                            />
                        </div>
                    </div>
                    <div className='different-writer-name-container'>
                        <img src={Person} alt="person" />
                        <div className='column'>
                            <span className='different-writer-name'>Jaida Barton</span>
                            <span className='different-writer-status'>2 days ago</span>
                        </div>
                    </div>
                </div>
                <div className='different-review-container'>
                    <div className='different-review-box'>
                        <h2 className='different-review-text'>“ Solo keeps things simple, the best apps of the year I've ever used. I’ sure that the upcoming updates will be more complete..”</h2>
                        <div>
                            <Rating
                                initialValue={5}
                                fillColor='#FF6E30'
                                className='rating'
                                readonly
                                size={!isDesktop ? isMediumScreen ? 25 : 20 : 35}
                            />
                        </div>
                    </div>
                    <div className='different-writer-name-container'>
                        <img src={Person} alt="person" />
                        <div className='column'>
                            <span className='different-writer-name'>Jaida Barton</span>
                            <span className='different-writer-status'>2 days ago</span>
                        </div>
                    </div>
                </div>
                <div className='different-review-container'>
                    <div className='different-review-box'>
                        <h2 className='different-review-text'>“ I used to have a hard time figuring out how to organize online meetings, Solo helped me to find a great solution!</h2>
                        <div>
                            <Rating
                                initialValue={5}
                                fillColor='#FF6E30'
                                className='rating'
                                readonly
                                size={!isDesktop ? isMediumScreen ? 25 : 20 : 35}
                            />
                        </div>
                    </div>
                    <div className='different-writer-name-container'>
                        <img src={Person} alt="person" />
                        <div className='column'>
                            <span className='different-writer-name'>Jaida Barton</span>
                            <span className='different-writer-status'>2 days ago</span>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className='different-button-container'>
                <div onClick={() => sliderRef.current.slickPrev()}><LiaLongArrowAltLeftSolid className="different-custom-arrow-color different-light-color different-left-arrow" /></div>
                <div onClick={() => sliderRef.current.slickNext()}><LiaLongArrowAltRightSolid className="different-custom-arrow-color different-dark-arrow" /></div>
            </div>
        </div >
    )
} 
