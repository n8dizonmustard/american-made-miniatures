import React from 'react';
import './VisitPage.css';
import Header from '../../components/Header/Header';
import { Image } from 'semantic-ui-react';
import FarmToursPic from '../../pics/visit/farm-tours.jpeg';
import PonyPic from '../../pics/visit/my-little-pony.jpeg';

export default function VisitPage({ isHome }){
    return(
        <>
        <Header isHome={false} isVisit={true}/>
        <div className='flex-container'>
            <Image src={FarmToursPic} className='flex-item' id='tour-pic' floated='left' />
            <div className='flex-item'  id='text-on-right'>
                <h1>Private Farm Tours</h1>
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
        </>
    ) 
}