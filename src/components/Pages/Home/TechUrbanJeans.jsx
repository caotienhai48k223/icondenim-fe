import React from 'react'
import './Home.css'
import RightIcon from '../../Icons/Right';
import { Link } from 'react-router-dom';

export default function TechUrbanJeans() {
  return (
    <div className='items1_div'>
      <div className='items1_container'>
        <div className='items1_content'>
          <div className='item_main'>
            <Link to='/techurban-jeans'>
              <img src='https://file.hstatic.net/1000360022/file/light_weight_mobile_20c999179bb645b78d2e12bf05c5c54a.jpg' alt='mainimg'/>
            </Link>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/qjid0172_a4c68b2493064647bea692e0f3586d5a_master.jpg' alt='img1'/>
            </div>
            <div className='item_body'>
              <div className='item_title'>Quần Jean Nam Đen Ống Suông Siêu Nhẹ ICON105 Form Straight</div>
              <div className='item_price'>590,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/qjid0176_91935979e38c42cab37c6f2101bfb8e9_master.jpg' alt='img2'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Quần Jean Nam Heavy Wash Retro Ống Suông Siêu nhẹ ICON105 Form Straight'>
                Quần Jean Nam Heavy Wash Retro Ống Suông Siêu nhẹ ICON105 Form Straight
              </div>
              <div className='item_price'>590,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/qjid0173_510fb5bf10bc4d3f9e0614c7156aa15d_master.jpg' alt='img3'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Quần Jean Nam Xám Đen Trơn Ống Suông Siêu nhẹ ICON105 Form Straight'>
                Quần Jean Nam Xám Đen Trơn Ống Suông Siêu nhẹ ICON105 Form Straight
              </div>
              <div className='item_price'>590,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/qjid0174_e33cdb17bc3144fe9840b334e773acda_master.jpg' alt='img4'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Quần Jean Nam Xanh Nhạt Trơn Ống Suông ICON105 Form Straight'>
                Quần Jean Nam Xanh Nhạt Trơn Ống Suông ICON105 Form Straight
              </div>
              <div className='item_price'>590,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/qjid0175_b6d754a061d64e10a42bc933bb2f74b4_master.jpg' alt='img5'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Quần Jean Nam Xanh Nhạt Trơn Ống Suông Siêu Nhẹ ICON105 Form Straight'>
                Quần Jean Nam Xanh Nhạt Trơn Ống Suông Siêu Nhẹ ICON105 Form Straight
              </div>
              <div className='item_price'>590,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/qsid0144-01_4c59330139d84542b5dda8f7b82bf5fd_master.jpg' alt='img6'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Quần Short Smart Jean Nam Blue Ripped Form Smart Fit'>
                Quần Short Smart Jean Nam Blue Ripped Form Smart Fit
              </div>
              <div className='item_price'>420,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/qsid0145-01_2d4d6dfd8ff2460f98a674a546f859b2_master.jpg' alt='img7'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Quần Short Smart Jean Nam Black-Grey Form Smart Fit'>
                Quần Short Smart Jean Nam Black-Grey Form Smart Fit
              </div>
              <div className='item_price'>420,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/qsid0146-fix_size_23da5ed942e642138c5353fe3f56bb4f_master.jpg' alt='img8'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Quần Short Smart Jean Nam Classic Blue Form Smart Fit'>
                Quần Short Smart Jean Nam Classic Blue Form Smart Fit
              </div>
              <div className='item_price'>420,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/qjid0143_b8538f5ce05b46ceb37411081fb3cd49_master.jpg' alt='img9'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Quần Smart Jean Nam Đen Trơn Co Giãn Thông Minh Form Smart Fit'>
                Quần Smart Jean Nam Đen Trơn Co Giãn Thông Minh Form Smart Fit
              </div>
              <div className='item_price'>590,000₫</div>
            </div>
          </div>
        </div>
        <div className='items1_button'>
          <div className='cl_button'>
              <Link to='/techurban-jeans' className='cl_btn'>
                <div className='link_button'>Xem tất cả</div>
                <div className='cl_icon'>
                  <RightIcon className='right_ic1'/>
                </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

