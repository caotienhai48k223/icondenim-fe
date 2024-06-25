import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer3() {
  return (
    <div className='footer3_container'>
      <div className='ft3_title'>
        <Link to='/'>HỆ THỐNG CỬA HÀNG</Link>
      </div>
      <div className='ft3_detail'>
        <Link to='/'>| Store 1: 12-12Bis, CMT8, P.Bến Thành, Q.1, HCM</Link>
      </div>
      <div className='ft3_detail'>
        <Link to='/'>| Store 2: 484, Lê Văn Sỹ, P.14, Q.3, HCM</Link>
      </div>
      <div className='ft3_detail'>
        <Link to='/'>| Store 3: 477 - 481, Sư Vạn Hạnh, P.12, Q.10, HCM</Link>
      </div>
      <div className='ft3_detail'>
        <Link to='/'>| Store 4: 261, Quang Trung, P.10, Q.Gò Vấp, HCM</Link>
      </div>
      <div className='ft3_detail'>
        <Link to='/'>| Store 5: 420 Nguyễn Thị Thập, P. Tân Quy, Q.7, HCM</Link>
      </div>
      <div className='ft3_detail'>
        <Link to='/'>| Store 6: 1357 Phạm Văn Thuận, P. Thống Nhất, Biên Hoà, Đồng Nai</Link>
      </div>
      <div className='ft3_detail'>
        <Link to='/'>| Store 7: 310, Tân Sơn Nhì, Q. Tân Phú, HCM </Link>
      </div>
    </div>
  )
}
