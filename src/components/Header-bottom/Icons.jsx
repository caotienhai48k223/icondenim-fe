import React from 'react'
import { Link } from 'react-router-dom'
import { GrMap } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

export default function Icons() {
  return (
    <div className='icon'>
      <div className='searchicon' title='Tìm kiếm'>
        <IoIosSearch className='search1'/>
      </div>
      <div className='usericon' title='Đăng nhập'>
        <Link to='/account'>
          <FaRegUser className='user1' />
        </Link>
      </div>
      <div className='mapicon' title='Cửa hàng'>
        <Link to='/map'>
          <GrMap className='map1' />
        </Link>
      </div>
      <div className='carticon' title='Giỏ hàng'>
        <Link to='/cart'>
          <AiOutlineShoppingCart className='cart1' />
        </Link>
      </div>
    </div>
  );
}
