import React from 'react'
import { useState, useEffect } from 'react'
import './FloatingLayer.css'
import { Link } from 'react-router-dom'
import { SlArrowUp } from "react-icons/sl"
import { GiPhone } from "react-icons/gi"
import { HiXMark } from "react-icons/hi2"

export default function RightFL() {
  const [isRightFL, setIsRightFL] = useState(false);
  const toggleRightFL = () => {
    if(window.pageYOffset >20) {
      setIsRightFL(true)
    }
    else {
      setIsRightFL(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth',
    })
  }
  useEffect (() => {
    window.addEventListener('scroll',toggleRightFL);
    return () => {
      window.removeEventListener('scroll',toggleRightFL)
    }
  }, [])

  const [buttonContact, setButtonContact] = useState(true)
  const [isListContact, setListContact] = useState(false)
  const setBtnContact = () => {
    setButtonContact(!buttonContact)
    setListContact(!isListContact)
  }


  return (
    <div className={`rightfl_div ${isRightFL ? 'show_rightfl':'hide_rightfl'}`}>
      <div className='rightfl_container'>
        <div className='rightfl_content'>
          <div className='contact_div'>
            <div className='contact_btn'>
              <div className={`social_div ${isListContact ? 'showsc' : 'hidesc'}`}>
                <div className='social_call'>
                  <Link to="tel:02873066060">
                    <GiPhone className='giphone1' />
                  </Link>
                </div>
                <div className='social_media'>
                  <Link to="https://zalo.me/4590864764660169182">
                    <img src="https://theme.hstatic.net/1000360022/1001258316/14/zalo-icon.svg?v=222" alt="Zalo" />
                  </Link>
                </div>
                <div className='social_media'>
                  <Link to='https://m.me/icondenimvn'>
                    <img src="https://file.hstatic.net/200000525917/file/messenger-fb_8fcc524fbaad4b1195a150dc5e0575d7.png" alt="Messenger" />
                  </Link>
                </div>
              </div>
              <div className='contact_border'>
                <GiPhone className={`giphone2 ${buttonContact ? 'show_gp' : 'hide_gp'}`} onClick={setBtnContact} />
                <HiXMark className={`cancel ${buttonContact ? 'hide_cc' : 'show_cc'}`} onClick={setBtnContact} />
              </div>
            </div>
          </div>
          <div className='scr_div' onClick={scrollToTop}>
            <SlArrowUp/>
          </div>
        </div>
      </div>
    </div>
  )
}
