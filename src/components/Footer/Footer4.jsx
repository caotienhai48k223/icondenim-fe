import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Footer4() {
  const[following,setFollowing]=useState(false)
  const handleFlclick=() =>{
    setFollowing(!following);
  }
  const handleShclick = () => {
    const shareUrl ='https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/icondenimvn/?ref=embed_page'
    window.open(shareUrl,'_blank','width=1000,height=600')
  }

  return (
    <div className='footer4_container'>
      <div className='ft4_title'>FANPAGE CHÚNG TÔI</div>
      <div className='ft4_body'>
        <div className='ft4_img'>
          <img src='https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/448767501_498435255861799_6772757424465711920_n.jpg?stp=dst-jpg_s350x350&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qsnN9RLdSM8Q7kNvgEhNUCc&_nc_ht=scontent.fdad3-6.fna&oh=00_AYCNyEKrlAcz7hvoHB2Qy5jgRzIQOxBz37JVuxfgZ59wpA&oe=667DC46A' alt='ft4_img'/>
        </div>
        <div className='ft4_content'>
          <div className='ft4_top'>
            <div className='ft4_logo'>
              <a href='https://www.facebook.com/icondenimvn/?ref=embed_page' target='_blank' rel="noopener noreferrer">
                <img src='https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/317796517_1820503985009361_5331018372770782419_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XTaLGvNjYIoQ7kNvgEj1iO2&_nc_ht=scontent.fdad3-6.fna&oh=00_AYAoA1Y8YJJr6ph269zyFaExiZ_IuJOz8sYGBfYbwYjBrA&oe=667DAB83' alt='ft4_logo'/>
              </a>
            </div>
            <div className='ft4_page'>
              <div className='page_name'>
                <a href='https://www.facebook.com/icondenimvn/?ref=embed_page' target='_blank' rel="noopener noreferrer">
                  ICON DENIM
                </a>
              </div>
              <div className='page_fl'>409K người theo dõi</div>
            </div>
          </div>
          <div className='ft4_bottom'>
            <div className='ft4_button1'>
              <button className='ft4_btn1' onClick={handleFlclick}>
                <i class="fa-brands fa-square-facebook" id={following ? 'fb_ic':'fb_ic_fl'}></i>
                <div className={following ? 'fb':'fb_fl'}>{following ? 'Đã theo dõi':'Theo dõi Trang'}</div>
              </button>
            </div>
            <div className='ft4_button2'>
              <button className='ft4_btn2' onClick={handleShclick}>
                <i class="fa-solid fa-share" id='share_ic'></i>
                <div className='share'>Chia sẻ</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='payment'>PHƯƠNG THỨC THANH TOÁN</div>
      <div className='payment_method'>
        <div className='method_img'>
          <img src='https://file.hstatic.net/1000360022/file/img_payment_method_1_618dbabde5334c77915e7c19ed6c8c0e.png' alt='method_img'/>
        </div>
        <div className='method_img'>
          <img src='https://file.hstatic.net/1000360022/file/img_payment_method_2_592fbda461664a00bb09fa7867e97a46.png' alt='method_img'/>
        </div>
        <div className='method_img'>
          <img src='https://file.hstatic.net/1000360022/file/img_payment_method_3_41d09bc32ced4351b9e47a07129b37c2.png' alt='method_img'/>
        </div>
        <div className='method_img'>
          <img src='https://file.hstatic.net/1000360022/file/img_payment_method_4_7fdbf4cdf59647e684a29799683114f7.png' alt='method_img'/>
        </div>
        <div className='method_img'>
          <img src='https://file.hstatic.net/1000360022/file/img_payment_method_5_23d8b98ee8c7456bab146250bedbc1a4.png' alt='method_img'/>
        </div>
      </div>
      <div className='bocongthuong'>
        <div className='bct_img'>
          <Link to='http://online.gov.vn/(X(1)S(wiqookd5bh1nvl2lxp1zu304))/Home/WebDetails/58429?AspxAutoDetectCookieSupport=1'>
            <img src='https://theme.hstatic.net/1000360022/1001251460/14/dathongbao.png?v=1288' alt='bct_img'/>
          </Link>
        </div>
        <div className='test'>Hihi                    <i class="fa-brands fa-twitter"></i></div>
      </div>
    </div>
  )
}
