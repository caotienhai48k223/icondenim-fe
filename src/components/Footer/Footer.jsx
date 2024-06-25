import React from 'react'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Footer3 from './Footer3'
import Footer4 from './Footer4'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_div'>
                <div className='footer_container'>
                    <div className='footer_content'>
                      <Footer1/>
                      <Footer2/>
                      <Footer3/>
                      <Footer4/>
                    </div>
                    <div className='banquyen'>
                      <div className='bq_title'>
                        © Bản quyền thuộc về 
                        <a href='https://icondenim.com/' target='_blank'>
                        ICONDENIM
                        </a> 
                      </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
