import React from 'react'
import './Home.css'
import RightIcon from '../../Icons/Right';
import { Link } from 'react-router-dom';

export default function HangMoi() {
  return (
    <div className='items1_div'>
      <div className='items1_container'>
        <div className='items1_content'>
          <div className='item_main'>
            <Link to='/san-pham-moi'>
              <img src='https://file.hstatic.net/1000360022/file/hang_moi_1_a4dfc626927d48a8ac63c839f203d8f8.jpg' alt='mainimg'/>
            </Link>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/ghep_set_5_42030ee26ba647cbacb7ac93975c6f6f_master.jpg' alt='img1'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Set Đồ Cotton Trơn Nam Basic Enjoy Life Form Regular'>
                Set Đồ Cotton Trơn Nam Basic Enjoy Life Form Regular
              </div>
              <div className='item_price'>290,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/id-009012a_a11a0c2702494190adf2fd31594361a7_1024x1024.jpg' alt='img2'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Quần Short Dù Nam All-Day Beach Form Regular'>
                Quần Short Dù Nam All-Day Beach Form Regular
              </div>
              <div className='item_price'>200,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/id-008846a_309da60925cd4c1a8562d700da882b13_master.jpg' alt='img3'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Áo Thun Nam Họa Tiết Exquisite Architecture Form Regular'>
                Áo Thun Nam Họa Tiết Exquisite Architecture Form Regular
              </div>
              <div className='item_price'>290,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/id-008994a_178a2cd78ca8419e9162b2cd44652fb5_master.jpg' alt='img4'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Áo Thun Nam Họa Tiết Signal Graffiti Form Regular'>
                Áo Thun Nam Họa Tiết Signal Graffiti Form Regular
              </div>
              <div className='item_price'>290,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/id-008955__1__f64e94e1d1b849d495a5d60b0db320e9_master.jpg' alt='img5'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Nón Lưỡi Trai Snapback Orgnls See Through'>
                Nón Lưỡi Trai Snapback Orgnls See Through
              </div>
              <div className='item_price'>250,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/id-008858a_283a71a370814eb88ad04a6d14b2dcd6_master.jpg' alt='img6'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Quần Short Kaki Nam Fundamental Form Regular'>
                Quần Short Kaki Nam Fundamental Form Regular
              </div>
              <div className='item_price'>320,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/id-008983a_79bee25a2d0c42dabee8b5e837a7f865_master.jpg' alt='img7'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Áo Thun Nam Phối Viền Cổ Knit Collar Form Regular'>
                Áo Thun Nam Phối Viền Cổ Knit Collar Form Regular
              </div>
              <div className='item_price'>290,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/id-008843a_d9ecb8e846e44bdbaa65840cd2f748df_master.jpg' alt='img8'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Áo Polo Nam Phối Viền Fabric Accent Form Regular'>
                Áo Polo Nam Phối Viền Fabric Accent Form Regular
              </div>
              <div className='item_price'>350,000₫</div>
            </div>
          </div>
          <div className='item'>
            <div className='item_img'>
              <img src='https://product.hstatic.net/1000360022/product/id-009084a_b5bd638e17a24b84bcf1fe127f2acacc_master.jpg' alt='img9'/>
            </div>
            <div className='item_body'>
              <div className='item_title' title='Áo Polo Nam Phối Viền Bo Stand Strong Form Regular'>
                Áo Polo Nam Phối Viền Bo Stand Strong Form Regular
              </div>
              <div className='item_price'>350,000₫</div>
            </div>
          </div>
        </div>
        <div className='items1_button'>
          <div className='cl_button'>
              <Link to='/san-pham-moi' className='cl_btn'>
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
