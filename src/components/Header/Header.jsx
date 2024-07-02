import React from 'react';
import './Header.css';
import Marquee from '../Header-top/Marquee';
import Logo from '../Header-bottom/Logo';
import Navigation from '../Header-bottom/Navigation';
import Icons from '../Header-bottom/Icons';

export default function Header({ toggleMobileDropdown }) {

    return (
        <header className='header'>
            <div className='header-top'>
                <Marquee/>
            </div>
            <div className='header-bottom'>
                <Logo toggleMobileDropdown={toggleMobileDropdown}/>
                <Navigation/>
                <Icons/>
            </div>
        </header>
    );
}