import React from 'react';
import Label from '../utility/labels';

export default function Header(){
    return(
        <div className='venue-header'>
            <header>{Label.APP_NAME}</header>
            <h6>{Label.VENUE_TAG_LINE}</h6>
        </div>
    );
}