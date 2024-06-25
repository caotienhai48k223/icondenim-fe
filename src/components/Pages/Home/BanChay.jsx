import React from 'react'
import './Home.css'
import RightIcon from '../../Icons/Right';
import { Link } from 'react-router-dom';

export default function BanChay() {
  return (
    <div className='items1_div'>
      <div className='items1_container'>
        <div className='items1_content'>
          <div className='item_main'>
            <Link to='/best-seller'>
              <img src='https://file.hstatic.net/1000360022/file/ban_chay_d59560a164054256ac89c1b81079a898.jpg' alt='mainimg'/>
            </Link>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/ao-somi-cuban-linen-flowral-printed-bohemian_88e6df1910b3401384402bd2e997fb2d_master.jpg' alt='img1'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Áo Sơ Mi Linen Nam Tay Ngắn Họa Tiết Cuban Floral Printed Bohemian'>
                Áo Sơ Mi Linen Nam Tay Ngắn Họa Tiết Cuban Floral Printed Bohemian
              </div>
              <div className='item_price'>320,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/id-007524a_4d46d9047b984eb28869d6643d292e6d_master.jpg' alt='img2'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Áo Thun Nam In Chữ Nổi California Spirit Form Regular'>
                Áo Thun Nam In Chữ Nổi California Spirit Form Regular
              </div>
              <div className='item_price'>290,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/id-008428a__1__f0781d807c6e4f7bbda33e48be478a8f_master.jpg' alt='img3'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Áo Polo Nam Drafting Clock Color Form Regular'>
                Áo Polo Nam Drafting Clock Color Form Regular
              </div>
              <div className='item_price'>350,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/id-008552a__1__6328fabcc245446b86fb10bcc94edc8c_master.jpg' alt='img4'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Quần Jeans Nam Xám Wash Ống Suông Cargo Form Straight'>
                Quần Jeans Nam Xám Wash Ống Suông Cargo Form Straight
              </div>
              <div className='item_price'>650,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/id-008393a__1__4118f7b4b48d4db2aa34948df383ccf9_master.jpg' alt='img5'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Áo Sơ mi Denim Nam Tay Dài Túi Đắp Form Regular'>
                Áo Sơ mi Denim Nam Tay Dài Túi Đắp Form Regular
              </div>
              <div className='item_price'>450,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/qjid0143_b8538f5ce05b46ceb37411081fb3cd49_master.jpg' alt='img6'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Quần Smart Jean Nam Đen Trơn Co Giãn Thông Minh Form Smart Fit'>
                Quần Smart Jean Nam Đen Trơn Co Giãn Thông Minh Form Smart Fit
              </div>
              <div className='item_price'>590,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/qjid0174_e33cdb17bc3144fe9840b334e773acda_master.jpg' alt='img7'/>
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
              <img src='https://product.hstatic.net/1000360022/product/id-005757a_7036e8f3193948a9a36e44dfc2907650_master.jpg' alt='img8'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Áo Thun Nam Trơn Basic And Beyond Form Slim'>
                Áo Thun Nam Trơn Basic And Beyond Form Slim
              </div>
              <div className='item_price'>250,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/id-008311a_765db41223864f459e8d1f47b32949c6_master.jpg' alt='img9'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Áo Thun Nam Họa Tiết Phối Viền Orgnls Take A Move Form Regular'>
                Áo Thun Nam Họa Tiết Phối Viền Orgnls Take A Move Form Regular
              </div>
              <div className='item_price'>290,000₫</div>
            </div>
          </div>
        </div>
        <div className='items1_button'>
          <div className='cl_button'>
              <Link to='/best-seller' className='cl_btn'>
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
