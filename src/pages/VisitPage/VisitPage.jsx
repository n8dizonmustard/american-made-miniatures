import React from 'react';
import Header from '../../components/Header/Header';

export default function VisitPage({ isHome }){
    return(
        <>
        <Header isHome={false} isVisit={true}/>
        <h1>Visit Page</h1>
        </>
    ) 
}