import React from 'react'
import { Link } from 'react-router-dom'

export default function Icons() {
  return (
    <div className='icon'>
      <div className='searchicon'>
        <i class="fa-solid fa-magnifying-glass search1"></i>
      </div>
      <div className='usericon'>
        <Link to='/account'>
          <i class="fa-solid fa-user user1"></i>
        </Link>
      </div>
      <div className='hearticon'>
        <Link to='/enjoy'>
          <i class="fa-solid fa-heart heart1"></i>
        </Link>
      </div>
      <div className='carticon'>
        <Link to='/cart'>
          <i class="fa-solid fa-cart-shopping cart1"></i>
        </Link>
      </div>
    </div>
  );
}
