import React from 'react'
import { Link } from 'react-router-dom'
import './ProductDD.css'
import { useState } from 'react'

export default function I105DD({isopeni105}) {
  if (!isopeni105) {return null}

  return (
    <div className='i105_div'>
      <div className='listi105'>
        <Link to='/cau-chuyen-icon105-lightweight'><span>Câu chuyện về ICON105 Lightweight</span></Link>
        <Link to='/icon105-lightweight'><span>Sản phẩm ICON105 Lightweight</span></Link>
      </div>
    </div>
  )
}