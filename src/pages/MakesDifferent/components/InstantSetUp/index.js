import React, { useRef } from 'react'
import Slider from "react-slick";
import "./InstantSetUp.css"
import InstantSetUpImage from '../../../../assets/images/instant-setup.png';
import InstantSetUpSmallImage from '../../../../assets/images/instant-setup-small.png';
import ProtectDataIcon from '../../../../assets/images/protect-data-icon.png';
import SuperSearchIcon from '../../../../assets/images/super-search-icon.png';
import ControlIcon from '../../../../assets/images/control-icon.png';
import WorkTogetherIcon from '../../../../assets/images/work-togather-icon.png';
import LiveCustomerIcon from '../../../../assets/images/live-customer-icon.png';
import ProjectManagementIcon from '../../../../assets/images/project-management-icon.png';
import WorkFloBuilderIcon from '../../../../assets/images/work-flow-builder-icon.png';
import BringIcon from '../../../../assets/images/bring-icon.png';
import ShareFileIcon from '../../../../assets/images/share-file-icon.png'
import BookDemoIcon from '../../../../assets/images/book-demo-icon.png';
import Shadow from '../../../../assets/images/shadow.png';
import Shadow2 from '../../../../assets/images/shadow-2.png';
import { useMediaQueryXL, useMediaQueryLG } from '../../../../hooks/useMediaQuery';

export default function InstantSetUp() {
    const sliderRef = useRef();
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.2,
        slidesToScroll: 1.2,
        arrows: false
    };
    const isMobile = useMediaQueryXL();
    const isDesktop = useMediaQueryLG();
    return (
        <>
            <div className='instant-setup-container'>
                <span className='instant-setup'>INSTANT SETUP</span>
                <h2 className='main-heading' >Fast, simple & effortless</h2>
                <div>
                    <img src={isMobile ? InstantSetUpImage : InstantSetUpSmallImage} alt="ios image" className='instant-image' />
                </div>
            </div>
            {isDesktop ? (<div className='instant-feature-container'>
                <div className='instant-feature-box'>
                    <img src={ProtectDataIcon} alt="ios image" className='instant-box-image' />
                    <h2>Protect Your Data</h2>
                    <div className='instant-divider'></div>
                    <p>4,729 curated design resources to energize your creative workflow</p>
                </div>
                <div className='instant-feature-box'>
                    <img src={SuperSearchIcon} alt="ios image" className='instant-box-image' />
                    <h2>Super Smart Search</h2>
                    <div className='instant-divider'></div>
                    <p>4,729 curated design resources to energize your creative workflow</p>
                </div>
                <div className='instant-feature-box'>
                    <img src={ControlIcon} alt="ios image" className='instant-box-image' />
                    <h2>Control everything in one place</h2>
                    <div className='instant-divider'></div>
                    <p>4,729 curated design resources to energize your creative workflow</p>
                </div>
                <div className='instant-feature-box'>
                    <img src={WorkTogetherIcon} alt="ios image" className='instant-box-image' />
                    <h2>Work better together</h2>
                    <div className='instant-divider'></div>
                    <p>4,729 curated design resources to energize your creative workflow</p>
                </div>
                <div className='instant-feature-box'>
                    <img src={LiveCustomerIcon} alt="ios image" className='instant-box-image' />
                    <h2>24/7 Live customer support</h2>
                    <div className='instant-divider'></div>
                    <p>4,729 curated design resources to energize your creative workflow</p>
                </div>
                <div className='instant-feature-box'>
                    <img src={ProjectManagementIcon} alt="ios image" className='instant-box-image' />
                    <h2>Project Management</h2>
                    <div className='instant-divider'></div>
                    <p>4,729 curated design resources to energize your creative workflow</p>
                </div>
                <div className='instant-feature-box'>
                    <img src={WorkFloBuilderIcon} alt="ios image" className='instant-box-image' />
                    <h2>Workflow builder</h2>
                    <div className='instant-divider'></div>
                    <p>4,729 curated design resources to energize your creative workflow</p>
                </div>
                <div className='instant-feature-box'>
                    <img src={BringIcon} alt="ios image" className='instant-box-image' />
                    <h2>Bring your team in channels</h2>
                    <div className='instant-divider'></div>
                    <p>4,729 curated design resources to energize your creative workflow</p>
                </div>
            </div>
            ) : (
                <div>
                    <Slider {...settings}>
                        <div className='instant-feature-box'>
                            <img src={ProtectDataIcon} alt="ios image" className='instant-box-image' />
                            <h2>Protect Your Data</h2>
                            <div className='instant-divider'></div>
                            <p>4,729 curated design resources to energize your creative workflow</p>
                        </div>
                        <div className='instant-feature-box'>
                            <img src={SuperSearchIcon} alt="ios image" className='instant-box-image' />
                            <h2>Super Smart Search</h2>
                            <div className='instant-divider'></div>
                            <p>4,729 curated design resources to energize your creative workflow</p>
                        </div>
                        <div className='instant-feature-box'>
                            <img src={ControlIcon} alt="ios image" className='instant-box-image' />
                            <h2>Control everything in one place</h2>
                            <div className='instant-divider'></div>
                            <p>4,729 curated design resources to energize your creative workflow</p>
                        </div>
                        <div className='instant-feature-box'>
                            <img src={WorkTogetherIcon} alt="ios image" className='instant-box-image' />
                            <h2>Work better together</h2>
                            <div className='instant-divider'></div>
                            <p>4,729 curated design resources to energize your creative workflow</p>
                        </div>
                        <div className='instant-feature-box'>
                            <img src={LiveCustomerIcon} alt="ios image" className='instant-box-image' />
                            <h2>24/7 Live customer support</h2>
                            <div className='instant-divider'></div>
                            <p>4,729 curated design resources to energize your creative workflow</p>
                        </div>
                        <div className='instant-feature-box'>
                            <img src={ProjectManagementIcon} alt="ios image" className='instant-box-image' />
                            <h2>Project Management</h2>
                            <div className='instant-divider'></div>
                            <p>4,729 curated design resources to energize your creative workflow</p>
                        </div>
                        <div className='instant-feature-box'>
                            <img src={WorkFloBuilderIcon} alt="ios image" className='instant-box-image' />
                            <h2>Workflow builder</h2>
                            <div className='instant-divider'></div>
                            <p>4,729 curated design resources to energize your creative workflow</p>
                        </div>
                        <div className='instant-feature-box'>
                            <img src={BringIcon} alt="ios image" className='instant-box-image' />
                            <h2>Bring your team in channels</h2>
                            <div className='instant-divider'></div>
                            <p>4,729 curated design resources to energize your creative workflow</p>
                        </div>
                    </Slider>
                </div>
            )}
            <div className='instant-setup-container top-zero'>
                <div className='demo-signup-main-container'>
                    <div className='demo-signup-container'>
                        <div className='demo-signup-box'>
                            <img src={ShareFileIcon} alt='share file icon' className='demo-signup-icons' />
                            <div className='demo-signup-descriptions'>
                                <span>Share files at the right time</span>
                                <p>We're a growing family of 382,081 designers and makers from around the world</p>
                                <div className='demo-signup-button'>
                                    <span>Sign up now</span>
                                </div>
                            </div>
                        </div>
                        <div className='demo-signup-box'>
                            <img src={BookDemoIcon} alt='share file icon' className='icon-full' />
                            <div className='demo-signup-descriptions demo-signup-descriptions-two'>
                                <span>Collaborate from anywhere</span>
                                <p>We're a growing family of 382,081 designers and makers from around the world</p>
                                <div className='demo-signup-button'>
                                    <span>Schedule a demo</span>
                                </div>
                            </div>
                        </div>
                        <img src={Shadow} className='half-shadow' />

                        <img src={Shadow2} className='half-shadow-two' />
                    </div>
                </div>
            </div>
        </>
    )
}
