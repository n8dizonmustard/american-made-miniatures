import React from 'react';
import './VisitPage.css';
import Header from '../../components/Header/Header';
import { Image, Grid } from 'semantic-ui-react';
import FarmToursPic from '../../pics/visit/farm-tours.jpeg';
import PonyPic from '../../pics/visit/my-little-pony.jpeg';
import UnicornPic from '../../pics/visit/cowboy_unicorn.jpeg';
import ImageSlider from '../../components/Gallery/ImageSlider';
import { SliderData } from '../../components/Gallery/SliderData';

export default function VisitPage({ isHome }){
    return(
        <>
        <Header isHome={false} isVisit={true}/>
        <div className='flex-container' id='odd'>
            <div className='tours-content' id='content'>
                <Image src={FarmToursPic} className='flex-item' id='tour-pic' />
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
                <Image src={PonyPic} id='pony-pic' />
            </div>
        </div>

        <div className='flex-container' id='odd'>
            <div className='photography-content' id='content'>
                <Image src={UnicornPic} id='unicorn-pic' />
                <div className='flex-item'  id='text-on-right'>
                    <h1 id='header'>Photography</h1>
                    <h2 id='pricing'>Adults: $25, Children: $15</h2>
                    <p>Our professional photographers will capture your special occasion with our animals on our beautiful grounds.</p>
                    <p>Please contact us for rates and appointments!</p>
                </div>
            </div>
        </div>


        {/* <ImageSlider slides={SliderData} /> */}

        </>
    ) 
}