import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function LookBook() {
  return (
    <div className='lookbook_div'>
      <div className='lookbook_container'>
        <div className='lookbook_title'>
          Tận Hưởng BST Cùng ICONDENIM
        </div>
        <div className='lookbook_img'>
          <div className='lb_img'>
            <Link to='/'>
              <img src='https://theme.hstatic.net/1000360022/1001251460/14/lookbook_1_image.jpg?v=1288' alt='lb_img1'/>
            </Link>
          </div>
          <div className='lb_img'>
            <Link to='/'>
              <img src='https://theme.hstatic.net/1000360022/1001251460/14/lookbook_2_image.jpg?v=1288' alt='lb_img2'/>
            </Link>
          </div>
          <div className='lb_img'>
            <Link to='/'> 
              <img src='https://theme.hstatic.net/1000360022/1001251460/14/lookbook_3_image.jpg?v=1288' alt='lb_img3'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
