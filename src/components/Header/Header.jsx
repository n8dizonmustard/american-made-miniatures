import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import HeaderHome from '../../pics/headers/home.png';
import HeaderVisit from '../../pics/headers/visit.jpeg';
import HeaderAnimals from '../../pics/headers/animals.jpeg';

export default function Header({ isHome, isVisit }){
    return (
        <>
        <div className='parent'>
            <div className='navbar'>
                <Link to='/' className='nav-link'>Stable Acres</Link>
                <Link to='/visit' className='nav-link'>Visit</Link>
                <Link to='/animals' className='nav-link'>Animals</Link>
            </div>
            <Image
                alt='header'
                className={
                    isHome ? 'header-home-pic'
                    : isVisit ? 'header-visit-pic'
                    : 'header-animals-pic'
                }
                src={
                    isHome ? HeaderHome : isVisit ? HeaderVisit : HeaderAnimals 
                }
            />
            <div className={
                isHome ? 'header-home-div'
                : isVisit ? 'header-visit-div'
                : 'header-animals-div' }>
                <h1 className='header-title'>{
                    isHome ? 'Stable Acres'
                    : isVisit ? 'Plan Your Visit'
                    : 'Meet Our Animals'
                }</h1>
                <p id='header-text'>{isHome ? 'Home to American Made Miniatures' : ''}</p>
            </div>
        </div>
        </>
    )
}