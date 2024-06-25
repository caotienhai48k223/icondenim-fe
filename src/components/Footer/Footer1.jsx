import React from 'react'
import CallIcon from '../Icons/Call'
import EmailIcon from '../Icons/Email'
import EmailForm from './EmailForm'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer1() {
  return (
    <div className='footer1_container'>
      <div className='ft_logo'>
        <Link to='/'>
          <img src='https://theme.hstatic.net/1000360022/1001251460/14/logo-footer.png?v=1288' alt='logo'/>
        </Link>
      </div>
      <div className='ft_call'>
        <div className='call_icon'>
          <a href='tel: +842873066060'><CallIcon className='call_ic'/></a>
        </div>
        <div className='call_info'>
          <a href='tel:+842873066060'>Tổng đài CSKH: 02873066060</a>
        </div>
      </div>
      <div className='ft_email'>
        <div className='email_icon'>
          <a href='mailto:cskh@icondenim.com'><EmailIcon className='email_ic'/></a> 
        </div>
        <div className='email_info'>
          <a href='mailto:cskh@icondenim.com'>Email: cskh@icondenim.com</a>
        </div>
      </div>
      <div className='ft_register'>
        <div className='register_title'>ĐĂNG KÝ NHẬN TIN</div>
        <div className='register_detail'>Hãy là người đầu tiên nhận khuyến mãi lớn!</div>
        <EmailForm/>
      </div>
      <div className='ft_connect'>
        <div className='connect_title'>KẾT NỐI VỚI CHÚNG TÔI</div>
        <div className='connect_icon'>
          <div className='connect_img'>
            <Link to='https://www.facebook.com/icondenimvn'>
              <img src='https://theme.hstatic.net/1000360022/1001194437/14/social_facebook_img.png?v=739' alt='connect_img'/>
            </Link>
          </div>
          <div className='connect_img'>
            <Link to='https://zalo.me/4590864764660169182'>
              <img src='https://theme.hstatic.net/1000360022/1001194437/14/social_zalo_img.png?v=739' alt='connect_img'/>
            </Link>
          </div>
          <div className='connect_img'>
            <Link to='https://www.instagram.com/icondenim.official/'>
              <img src='https://theme.hstatic.net/1000360022/1001194437/14/social_instagram_img.png?v=739' alt='connect_img'/>
            </Link>
          </div>
          <div className='connect_img'>
            <Link to='https://www.youtube.com/@icondenim4096'>
              <img src='https://theme.hstatic.net/1000360022/1001194437/14/social_youtube_img.png?v=739' alt='connect_img'/>
            </Link>
          </div>
          <div className='connect_img'>
            <Link to='https://www.tiktok.com/@icon_denim'>
              <img src='https://theme.hstatic.net/1000360022/1001194437/14/social_tiktok_img.png?v=739' alt='connect_img'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
