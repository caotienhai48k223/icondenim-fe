import React from 'react'
import SearchIcon from '../Icons/Search'
import UserIcon from '../Icons/User'
import CartIcon from '../Icons/Cart'
import HeartIcon from '../Icons/Heart'
import { Link } from 'react-router-dom'

export default function Icons() {
    return (
        <div className='icon'>
            <div className='searchicon'>
                <SearchIcon />
            </div>
            <Link to='/account'>
                <UserIcon />
            </Link>
            <Link to='/enjoy'>
                <HeartIcon />
            </Link>
            <Link to='/cart'>
                <CartIcon/>
            </Link>
        </div>
    );
}
