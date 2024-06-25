import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer2() {
  return (
    <div className='footer2_container'>
      <div className='ft2_title'>
        HỖ TRỢ KHÁCH HÀNG
      </div>
      <div className='ft2_detail'>
        <Link to='/'>Chính sách đổi hàng và bảo hành</Link>
      </div>
      <div className='ft2_detail'>
        <Link to='/'>Chính sách Membership</Link>
      </div>
      <div className='ft2_detail'>
        <Link to='/'>Chính sách ưu đãi sinh nhật</Link>
      </div>
      <div className='ft2_detail'>
        <Link to='/'>Chính sách bảo mật</Link>
      </div>
    </div>
  )
}
