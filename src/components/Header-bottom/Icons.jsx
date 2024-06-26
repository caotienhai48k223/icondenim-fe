import React from 'react'
import { Link } from 'react-router-dom'

export default function Icons() {
    return (
        <div className='icon'>
            <div className='searchicon'>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <Link to='/account'>
                <i class="fa-solid fa-user"></i>
            </Link>
            <Link to='/enjoy'>
                <i class="fa-solid fa-heart"></i>
            </Link>
            <Link to='/cart'>
                <i class="fa-solid fa-cart-shopping"></i>
            </Link>
        </div>
    );
}
