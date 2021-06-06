import React from 'react';
import './Footer.css';
import { Grid, Icon } from 'semantic-ui-react';

export default function Footer(){

    return(
        <Grid>
            <Grid.Row centered>
            <Grid.Column width={5}>
                <Icon name='phone' color='green' size='big' flipped='horizontally' id='contact-icon'/>
                <p class='contact-text'>Office: (707) 778-2060</p>
            </Grid.Column>
            <Grid.Column width={6}>
                <Icon name='mail' color='red' size='big' id='contact-icon'/>
                <p class='contact-text' id='email'>AmericanMadeMiniatures@yahoo.com</p>
            </Grid.Column>
            <Grid.Column width={4}>
                <Icon name='facebook official' color='blue' size='big' id='contact-icon'/>
                <p class='contact-text'>Follow us on Facebook!</p>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}