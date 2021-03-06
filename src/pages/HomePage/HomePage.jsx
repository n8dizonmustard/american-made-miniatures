import React from 'react';
import './HomePage.css';
import { Divider, Grid, Icon, Image } from 'semantic-ui-react';
import Header from '../../components/Header/Header';
import AboutPic from '../../pics/homepage/about.png';
import Footer from '../../components/Footer/Footer';

export default function HomePage({ isHome }){
    return(
        <>
        <Header isHome={true}/>
        <Grid stackable columns={2} id='about'>
            <Grid.Row>
                <Grid.Column width={7}>
                    <Image src={AboutPic} id='about-pic'/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <h1 id='header'>American Made Miniatures</h1>
                    <p>is a small family operated farm sanctuary, located in beautiful Petaluma, California.</p>
                    <p>We invite the public to come visit, feed, pet, & learn about our animals. We can also take some of our animals to schools, day-cares, convalescent homes, assisted living communities, churches & more.</p>
                    <p>Ask about our free community service events/visits for qualifying organizations, limited number of openings available.</p>
                    <p>While regular barn hours are sunrise to  sunset, "office hours (for returning phone calls and emails) is more like "office minutes" & often needs to be squeezed in-between barn needs. Thank you for your patience!</p>
                    <hr /><br />
                    <p id='covid'><em>***While we observe the county's COVID guidelines (A facial covering must be worn whenever the required social distancing of six feet or more cannot be maintained) We understand some feel more comfortable maintaining 6 ft PLUS masks. We do our best to accommodate and support every guest's personal preferences, however this can be difficult as the weather warms up, we are guiding tours all day and walking many miles providing pony rides in the heat. We ask that if you prefer masks be worn in addition to the 6 feet of distance that you let us know in advance so we can schedule your tour around the heat. Thank you for your cooperation!***</em></p>
                </Grid.Column>
            </Grid.Row>
            <Divider />
        </Grid>
        <Footer />
        </>
    ) 
}