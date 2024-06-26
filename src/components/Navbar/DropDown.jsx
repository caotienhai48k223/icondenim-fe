import React from 'react'
import { Link } from 'react-router-dom'
import './ProductDD.css'
import { useState } from 'react'

export default function DropDown({isopen, onHoverEnter, onHoverLeave}) {
  if (!isopen) return null

  return (
    <div className='product_div' onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>
      <div className='ao'>
        <Link to='/ao' className='ao_content'>ÁO</Link>
        <div className='listao'>
          <Link to='/aothun'><span>Áo Thun</span></Link>
          <Link to='/aopolo'><span>Áo Polo</span></Link>
          <Link to='/aosomi'><span>Áo Sơmi</span></Link>
          <Link to='/aokhoac'><span>Áo Khoác</span></Link>
          <Link to='/aoni&len'><span>Áo Nỉ Và Len</span></Link>
          <Link to='/aohoodie'><span>Hoodie</span></Link>
          <Link to='/tanktop'><span>Tank Top - Áo Ba Lỗ</span></Link>
          <Link to='/set'><span>Set Đồ</span></Link>
        </div>
      </div>
      <div className='quan'>
        <Link to='/quan' className='quan_content'>QUẦN</Link>
        <div className='listquan'>
          <Link to='/quanjean'><span>Quần Jean</span></Link>
          <Link to='/quanshort'><span>Quần Short</span></Link>
          <Link to='/quankaki&chino'><span>Quần Kaki & Chino</span></Link>
          <Link to='/quanjogger'><span>Quần Jogger</span></Link>
          <Link to='/quantay'><span>Quần Tây</span></Link>
          <Link to='/quanboxer'><span>Quần Boxer</span></Link>
          <Link to='/set'><span>Set Đồ</span></Link>
          <Link to='/smartjean'><span>Smart Jean</span></Link>
        </div>
      </div>
      <div className='gvp'>
        <Link to='/giay&phukien' className='gvp_content'>GIÀY & PHỤ KIỆN</Link>
        <div className='listgvp'>
          <Link to='/giay&dep'><span>Giày & Dép</span></Link>
          <Link to='/tui&vi'><span>Balo, Túi & Ví</span></Link>
          <Link to='/non'><span>Nón</span></Link>
          <Link to='/thatlung'><span>Thắt Lưng</span></Link>
          <Link to='/matkinh'><span>Mắt Kính</span></Link>
          <Link to='/vo'><span>Vớ</span></Link>
        </div>
      </div>
    </div>
  )
}