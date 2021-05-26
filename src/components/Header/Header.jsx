import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import HeaderHomePic from '../../pics/headerhome.png';

export default function Header(){
    return (
        <>
        <div className='navbar'>
            <Link to='/' className='nav-link'>Stable Acres</Link>
            <Link to='/visit' className='nav-link'>Visit</Link>
            <Link to='/animals' className='nav-link'>Animals</Link>
        </div>
        <img src={HeaderHomePic} alt='headerhome' className='header-home'/>
        <div className='header-div'>
            <h1 className='header-title'>Stable Acres</h1>
            <p>Home of American Made Miniatures</p>
        </div>
        </>
    )
}