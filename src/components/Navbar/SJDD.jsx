import React from 'react'
import { Link } from 'react-router-dom'
import './ProductDD.css'

export default function SJDD({isopensj}) {
  return (
    <div className={`sj_div ${isopensj ? 'showsj':'hidesj'}`}>
      <div className='listsj'>
        <Link to='/cau-chuyen-smart-jean'><span>Câu chuyện về Smart Jeans</span></Link>
        <Link to='/smart-jeans'><span>Sản phẩm Smart Jeans</span></Link>
      </div>
    </div>
  )
}