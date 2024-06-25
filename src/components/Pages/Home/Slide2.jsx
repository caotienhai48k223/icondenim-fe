import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

export default function Slide2() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
    <div className='slide2'>
      <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true} slidesToSlide={2}>
        <div className='slide2_container'>
          <div className='slide2_img'>
            <Link to='/'>
              <img src='https://product.hstatic.net/1000360022/product/id-000401a_5e973113d611494eaeba2934dced7c66_1024x1024.jpg' alt='slide2_img1'/>
            </Link>
          </div>
          <div className='slide2_content'>
            <div className='slide2_title'>Áo Thun Nam Trơn Tay Dài Orgnls Form Regular</div>
            <div className='slide2_price'>203,000₫</div>
          </div>
        </div>
        <div className='slide2_container'>
          <div className='slide2_img'>
            <Link to='/'>
              <img src='https://product.hstatic.net/1000360022/product/id-008955__1__f64e94e1d1b849d495a5d60b0db320e9_master.jpg' alt='slide2_img2'/>
            </Link>
          </div>
          <div className='slide2_content'>
            <div className='slide2_title'>Nón Lưỡi Trai Snapback Orgnls See Through</div>
            <div className='slide2_price'>250,000₫</div>
          </div>
        </div>
        <div className='slide2_container'>
          <div className='slide2_img'>
            <Link to='/'>
              <img src='https://product.hstatic.net/1000360022/product/id-008325a__1__8282ab13591246fd9fb56a5537324f6d_master.jpg' alt='slide2_img3'/>
            </Link>
          </div>
          <div className='slide2_content'>
            <div className='slide2_title'>Áo Khoác Varsity Denim Nam Classic Legacy Form Regular</div>
            <div className='slide2_price'>550,000₫</div>
          </div>
        </div>
        <div className='slide2_container'>
          <div className='slide2_img'>
            <Link to='/'>
              <img src='https://product.hstatic.net/1000360022/product/id-008734a__1__08e5c852013245f28ba0154d9212afb8_master.jpg' alt='slide2_img4'/>
            </Link>
          </div>
          <div className='slide2_content'>
            <div className='slide2_title'>Áo Polo Nam Phối Sọc In Logo Accelerate Avenue Form Regular</div>
            <div className='slide2_price'>390,000₫</div>
          </div>
        </div>
        <div className='slide2_container'>
          <div className='slide2_img'>
            <Link to='/'>
              <img src='https://product.hstatic.net/1000360022/product/id-008827a__1__538c8e9f1b3b48a69eebf090a129ac26_master.jpg' alt='slide2_img5'/>
            </Link>
          </div>
          <div className='slide2_content'>
            <div className='slide2_title'>Áo Polo Nam Phối Viền Bo Stand Strong Form Regular</div>
            <div className='slide2_price'>350,000₫</div>
          </div>
        </div>
        <div className='slide2_container'>
          <div className='slide2_img'>
            <Link to='/'>
              <img src='https://product.hstatic.net/1000360022/product/id-008375aa_d31e63eac15e4b92ad718bc91d853fc3_master.jpg' alt='slide2_img6'/>
            </Link>
          </div>
          <div className='slide2_content'>
            <div className='slide2_title'>Áo Sơ mi Linen Nam Tay Dài Pale Wave Form Regular</div>
            <div className='slide2_price'>390,000₫</div>
          </div>
        </div>
        <div className='slide2_container'>
          <div className='slide2_img'>
            <Link to='/'>
              <img src='https://product.hstatic.net/1000360022/product/ao-so-mi-nam-tay-dai-palewave-densed-stripes-form-slim__2__2c1eac6f30d34cf39593eefebe8007ae_master.jpg' alt='slide2_img7'/>
            </Link>
          </div>
          <div className='slide2_content'>
            <div className='slide2_title'>Áo Sơ Mi Nam Tay Dài Palewave Densed Stripes Form Slim</div>
            <div className='slide2_price'>320,000₫</div>
          </div>
        </div>
        <div className='slide2_container'>
          <div className='slide2_img'>
            <Link to='/'>
              <img src='https://product.hstatic.net/1000360022/product/id-007493aa__1__69b60d9173884382b6ac7c955e79ef07_master.jpg' alt='slide2_img8'/>
            </Link>
          </div>
          <div className='slide2_content'>
            <div className='slide2_title'>Áo Sơ Mi Oxford Nam Tay Dài Sọc Trắng Red Script Form Regular</div>
            <div className='slide2_price'>350,000₫</div>
          </div>
        </div>
        <div className='slide2_container'>
          <div className='slide2_img'>
            <Link to='/'>
              <img src='https://product.hstatic.net/1000360022/product/id-008833a_b253722d237e442e852a69f6f3e0b293_master.jpg' alt='slide2_img9'/>
            </Link>
          </div>
          <div className='slide2_content'>
            <div className='slide2_title'>Áo Thun Nam Cổ Tim Rã Rập Champion Form Oversize</div>
            <div className='slide2_price'>290,000₫</div>
          </div>
        </div>
      </Carousel>
    </div>
    )
  }
