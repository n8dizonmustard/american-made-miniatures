import React from 'react';
import './VisitPage.css';
import Header from '../../components/Header/Header';
import { Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import FarmToursPic from '../../pics/visit/farm-tours.jpeg';
import PonyPic from '../../pics/visit/my-little-pony.jpeg';
import UnicornPic from '../../pics/visit/cowboy_unicorn.jpeg';
import ServicePic from '../../pics/visit/service.jpeg';
import MapPic from '../../pics/visit/map.png';
import ImageSlider from '../../components/Gallery/ImageSlider';
import { SliderData } from '../../components/Gallery/SliderData';

export default function VisitPage({ isHome }){
    return(
        <>
        <Header isHome={false} isVisit={true}/>
        <div className='flex-container' id='odd'>
            <div className='tours-content' id='content'>
                <Image src={FarmToursPic} className='images' id='tour-pic' />
                <div className='flex-item'  id='text-on-right'>
                    <h1 id='header'>Private Farm Tours</h1>
                    <h2 id='pricing'>Adults: $25, Children: $15</h2>
                    <li>$100 minimum per tour.</li>
                    <li>Available by appointment only.</li>
                    <li>Mondays through Saturdays.</li>
                    <li>Sunrise to Sunset.</li>
                    <li>Weather Permitting.</li>
                    <li>Closed Sundays.</li>
                    <li>Tours are approximately 1 hour long.</li>
                    <li>Additional $50 for every additional hour.</li>
                </div>
            </div>
        </div>

        <div className='flex-container' id='even'>
            <div className='pony-content' id='content'>
                <div className='flex-item' id='text-on-left'>
                    <h1 id='header'>My Little Pony Class</h1>
                    <h2 id='pricing'>Group Session, $50 (1 hour)</h2>
                    <p>Party of 2-4 participants? This is the perfect session for your lesson!</p>
                    <h2 id='pricing'>Private Session, $50 (30 minutes)</h2>
                    <p>Maximize your lesson with some one-on-one time!</p>
                    <br />
                    <p>All classes are reserved by appointment only.</p>
                </div>
                <Image src={PonyPic} className='images' id='pony-pic' />
            </div>
        </div>

        <div className='flex-container' id='odd'>
            <div className='photography-content' id='content'>
                <Image src={UnicornPic} className='images' id='unicorn-pic' />
                <div className='flex-item'  id='text-on-right'>
                    <h1 id='header'>Photography</h1>
                    <h2 id='pricing'>Adults: $25, Children: $15</h2>
                    <p>Our professional photographers will capture your special occasion with our animals on our beautiful grounds.</p>
                    <p>Please contact us for rates and appointments!</p>
                </div>
            </div>
        </div>

        <div className='flex-container' id='even'>
            <div className='service-content' id='content'>
                <div className='flex-item' id='text-on-left'>
                    <h1 id='header'>Community Service</h1>
                    <p>Please ask us about our free community service events for</p>
                    <div id='service-list'>
                        <li>Youth Groups</li>
                        <li>4-H Groups</li>
                        <li>Scouts</li>
                        <li>Churches</li>
                        <li>Senior Organizations</li>
                        <li>Schools</li>
                    </div>
                    <br />
                    <p>And more!</p>
                </div>
                <Image src={ServicePic} className='images' id='service-pic' />
            </div>
        </div>

        <div className='flex-container' id='odd'>
            <div className='map-content'>
                <a href='https://www.google.com/maps/dir//1220+San+Antonio+Rd,+Petaluma,+CA+94952/@38.1861796,-122.6593449,14z/data=!4m17!1m7!3m6!1s0x8085b7249c4d9435:0xe1a853020913ad59!2s1220+San+Antonio+Rd,+Petaluma,+CA+94952!3b1!8m2!3d38.188274!4d-122.644508!4m8!1m0!1m5!1m1!1s0x8085b7249c4d9435:0xe1a853020913ad59!2m2!1d-122.644508!2d38.188274!3e3?hl=en'>
                    <Image src={MapPic} id='map-pic' />
                </a>
                <p id='transportation'>Please contact us for information regarding transportation.</p>
            </div>
        </div>

        {/* <ImageSlider slides={SliderData} /> */}

        </>
    ) 
}