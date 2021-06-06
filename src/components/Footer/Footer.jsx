import React from 'react';
import './Footer.css';
import { Icon } from 'semantic-ui-react';

export default function Footer(){

    return (
        <div className='container'>
            <div className='call'>
                <Icon name='phone' color='green' size='big' flipped='horizontally' id='call-icon'/>
                <p id='call-text'>Office: (707) 778-2060</p>
            </div>
            <div className='email'>
                <Icon name='mail' color='red' size='big' id='email-icon'/>
                <p id='email-text'>AmericanMadeMiniatures@yahoo.com</p>
            </div>
            <div className='facebook'>
                <Icon name='facebook official' color='blue' size='big' id='facebook-icon'/>
                <p id='facebook-text'>Follow us on Facebook!</p>
            </div>
        </div>
    )
}