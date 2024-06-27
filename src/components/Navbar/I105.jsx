import React from 'react'
import { Link } from 'react-router-dom'
import './ProductDD.css'

export default function I105DD({isopeni105}) {
  return (
    <div className={`i105_div ${isopeni105 ? 'showi105':'hidei105'}`}>
      <div className='listi105'>
        <Link to='/cau-chuyen-icon105-lightweight'><span>Câu chuyện về ICON105 Lightweight</span></Link>
        <Link to='/icon105-lightweight'><span>Sản phẩm ICON105 Lightweight</span></Link>
      </div>
    </div>
  )
}