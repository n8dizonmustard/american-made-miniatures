import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import HeaderHomePic from '../../pics/headers/home.png';
import HeaderVisitPic from '../../pics/headers/visit.jpeg';

export default function Header({ isHome }){
    return (
        <>
        <div className='parent'>
            <div className='navbar'>
                <Link to='/' className='nav-link'>Stable Acres</Link>
                <Link to='/visit' className='nav-link'>Visit</Link>
                <Link to='/animals' className='nav-link'>Animals</Link>
            </div>
            <Image alt='headerhome' className='header-home-pic' src={
                isHome ? HeaderHomePic : HeaderVisitPic    
                }
            />
            <div className='header-div'>
                <h1 className='header-title'>Stable Acres</h1>
                <p>Home to American Made Miniatures</p>
            </div>
        </div>
        </>
    )
}