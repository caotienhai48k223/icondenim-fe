import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
export default function Instagram() {
  return (
    <div className='ins_div'>
      <div className='ins_container'>
        <div className='ins_content'>
          <div className='ins_title'>Follow Instagram @ICONDENIM</div>
          <div className='ins_body'>
            <div className='ins'>
              <div className='ins_img'>
                <Link to='https://www.instagram.com/icondenim.official/'>
                  <img src='https://file.hstatic.net/1000360022/file/img_5028-min_d83e4bee5c8c45ccb7606f422ebd2d65_large.jpg' alt='ins_img'/>
                </Link>
              </div>
              <Link to='https://www.instagram.com/icondenim.official/'>
                <div className='ins_icon'>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </Link>
            </div>
            <div className='ins'>
              <div className='ins_img'>
                <Link to='https://www.instagram.com/icondenim.official/'>
                  <img src='https://file.hstatic.net/1000360022/file/cea21901-e37d-4787-8ff7-ace184b676dd_ea2e34b44fd84106bbb5c88b7dfdbdde_large.jpg' alt='ins_img'/>
                </Link>
              </div>
              <Link to='https://www.instagram.com/icondenim.official/'>
                <div className='ins_icon'>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </Link>
            </div>
            <div className='ins'>
              <div className='ins_img'>
                <Link to='https://www.instagram.com/icondenim.official/'>
                  <img src='https://file.hstatic.net/1000360022/file/img_4379-min_208108ee5274464990cd518d6500936c_large.jpg' alt='ins_img'/>
                </Link>
              </div>
              <Link to='https://www.instagram.com/icondenim.official/'>
                <div className='ins_icon'>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </Link>
            </div>
            <div className='ins'>
              <div className='ins_img'>
                <Link to='https://www.instagram.com/icondenim.official/'>
                  <img src='https://file.hstatic.net/1000360022/file/z5063765340677_353a567aafb763483963446c9b307690_e7aa8acbcc23449999fc5b63687d906f_large.jpg' alt='ins_img'/>
                </Link>
              </div>
              <Link to='https://www.instagram.com/icondenim.official/'>
                <div className='ins_icon'>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </Link>
            </div>
            <div className='ins'>
              <div className='ins_img'>
                <Link to='https://www.instagram.com/icondenim.official/'>
                  <img src='https://file.hstatic.net/1000360022/file/z5063765348351_bae6b7a673626e3daf9c1b9a132583bd_9c2f4cf65131426f9a34086101803fb5_large.jpg' alt='ins_img'/>
                </Link>
              </div>
              <Link to='https://www.instagram.com/icondenim.official/'>
                <div className='ins_icon'>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
