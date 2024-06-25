import React from 'react'
import './Home.css'

export default function Policies() {
  return (
    <div className='policies_div'>
      <div className='policies_container'>
        <div className='policies_content'>
          <div className='policy1'>
            <div className='policy1_img'>
              < img src='https://file.hstatic.net/1000360022/file/giaohangnhanh_abaa5d524e464a0c8547a91ad9b50968.png' alt='giaohangnhanh'/>
            </div>
            <div className='policy1_info'>
              <div className='policy1_title'>
                Miễn phí vận chuyển
              </div>
              <div className='policy1_decs'>
                Mọi đơn hàng từ 399K
              </div>
            </div>
          </div>
          <div className='policy2'>
            <div className='policy2_img'>
              < img src='https://file.hstatic.net/1000360022/file/giaohang_2943ae148bf64680bf20c3d881c898c9.png' alt='doihang'/>
            </div>
            <div className='policy2_info'>
              <div className='policy2_title'>
                Đổi hàng tận nhà
              </div>
              <div className='policy2_decs'>
                Trong vòng 7 ngày
              </div>
            </div>
          </div>
          <div className='policy3'>
            <div className='policy3_img'>
              < img src='https://file.hstatic.net/1000360022/file/cod_5631433f0ad24c949e44e512b8535c43.png' alt='thanhtoan'/>
            </div>
            <div className='policy3_info'>
              <div className='policy3_title'>
                Thanh toán COD
              </div>
              <div className='policy3_decs'>
                Yên tâm mua sắm
              </div>
            </div>
          </div>
          <div className='policy4'>
            <div className='policy4_img'>
              < img src='https://file.hstatic.net/1000360022/file/cod_5631433f0ad24c949e44e512b8535c43.png' alt='hotro'/>
            </div>
            <div className='policy4_info'>
              <div className='policy4_title'>
                Hotline: 028.73066.060
              </div>
              <div className='policy4_decs'>
                Hỗ trợ bạn từ 8h30-24h00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
