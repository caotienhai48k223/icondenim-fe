import React from 'react'
import Slide2 from './Slide2'
import './Home.css'
import RightIcon from '../../Icons/Right'
import { Link } from 'react-router-dom'

export default function Collection() {
  return (
    <div className='collection_div'>
      <div className='collection_container'>
        <div className='collection_content'>
          <div className='collection_top'>
            <div className='collection_title'>Empowered Blokecore Players</div>
          </div>
          <div className='collection_bottom'>
            <Slide2/>
          </div>
          <div className='collection_button'>
            <div className='cl_button'>
              <Link to='/adshadsd' className='cl_btn'>
                <div className='link_button'>Xem tất cả</div>
                <div className='cl_icon'>
                  <RightIcon className='right_ic1'/>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
