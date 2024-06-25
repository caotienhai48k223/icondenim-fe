import React from 'react'
import { Link } from 'react-router-dom'
import './ProductDD.css'
import { useState } from 'react'

export default function SJDD({isopensj}) {
    const[sjdd, setSjdd] = useState(false)
    if (!isopensj) {return null}

  return (
    <div className='sj_div'>
      <div className='listsj'>
        <Link to='/cau-chuyen-smart-jean'><span>Câu chuyện về Smart Jeans</span></Link>
        <Link to='/smart-jeans'><span>Sản phẩm Smart Jeans</span></Link>
      </div>
    </div>
  )
}