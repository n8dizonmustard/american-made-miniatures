import React from 'react';
import './VisitPage.css';
import Header from '../../components/Header/Header';
import { Grid, Image } from 'semantic-ui-react';
import FarmToursPic from '../../pics/visit/farm-tours.jpeg';
import PonyPic from '../../pics/visit/my-little-pony.jpeg';

export default function VisitPage({ isHome }){
    return(
        <>
        <Header isHome={false} isVisit={true}/>
        <Grid stackable columns={2} id='grid'>
            <Grid.Row id='odd-row'>
                <Grid.Column width={7}>
                    <Image src={FarmToursPic} id='tour-pic' />
                </Grid.Column>
                <Grid.Column width={9}>
                    <div className='text-on-right'>
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
                </Grid.Column>
            </Grid.Row>

            <Grid.Row id='even-row'>
                <Grid.Column width={9}>
                    <div className='text-on-left'>
                        <h1>Private Farm Tours</h1>
                        <h2 id='pricing'>Group Session, $50 (1 hour)</h2>
                        <p>Generally 2-4 participants</p>
                        <h2 id='pricing'>Private Session, $50 (30 minutes)</h2>
                        <p>All classes are reserved by appointment only.</p>
                    </div>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Image src={PonyPic} id='pony-pic' />
                </Grid.Column>
            </Grid.Row>

        </Grid>
        </>
    ) 
}