import React from 'react'
import { Link } from 'react-router-dom'
import './ProductDD.css'

export default function AoNamDD({isopenaonam, onHoverEnter, onHoverLeave}) {
  return (
    <div className={`dd_aonam_div ${isopenaonam ? 'showaonam':'hideaonam'}`} onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>
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
  )
}
