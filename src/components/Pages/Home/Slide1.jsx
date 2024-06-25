import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

export default function Slide1() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
  <div className='slide1'>
    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={5000} infinite={true}>
      <div className='slide1_img1'>
        <Link to='/bst-light-summer-2024'>
          <img src='https://file.hstatic.net/1000360022/file/summer_dk_8cec687266ff43ceae8ed1d9b89c5801_2048x2048.jpg' alt='slide1_img1'/>
        </Link>
      </div>
      <div className='slide1_img2'>
        <Link to='/san-pham-moi'>
          <img src='https://file.hstatic.net/1000360022/file/banner_new_dk_60b01a888a574a5497bb2b368519cc2d_2048x2048.jpg' alt='slide1_img2' />
        </Link>
      </div>
      <div className='slide1_img3'>
        <Link to='/techurban-jeans-icon105-lightweight'>
          <img src='https://file.hstatic.net/1000360022/file/anhbanthan_desktop_58b0ff7d673b425eb5e50d947089786a_2048x2048.jpg' alt='slide1_img3' />
        </Link>
      </div>
    </Carousel>
  </div>
  )
}
