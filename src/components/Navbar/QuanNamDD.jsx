import React from 'react'
import { Link } from 'react-router-dom'
import './ProductDD.css'
import { useState } from 'react'

export default function QuanNamDD({isopenquannam, onHoverEnter, onHoverLeave}) {
  if (!isopenquannam) {return null}

  return (
    <div className='quannam_div' onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>
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
  )
}