import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <>
        <Link to='/'>Stable Acres</Link>
        <Link to='/visit'>Visit</Link>
        <Link to='/animals'>Animals</Link>
        </>
    )
}