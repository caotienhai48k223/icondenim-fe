import React from 'react'
import Header from '../../../components/Header/Header'
import './Home.css'
import { Helmet } from 'react-helmet'
import Slide1 from './Slide1'
import Policies from './Policies'
import BST from './BST'
import Voucher from './Voucher'
import Collection from './Collection'
import Category1 from './Category1'
import LookBook from './LookBook'
import Video from './Video'
import Instagram from './Instagram'
import Footer from '../../Footer/Footer'
import MobileDD from '../../Header-bottom/MobileDD'
import { useState } from 'react'
import RightFL from '../../Floating-layer/RightFL'

export default function Home() {
  const [mobileDropdownVisible, setMobileDropdownVisible] = useState(false);

  const toggleMobileDropdown = () => {
    setMobileDropdownVisible(!mobileDropdownVisible);
  };

  return (
    <div className='home_index'>
      <Helmet>
        <title>ICONDENIM - Thương Hiệu Thời Trang Nam Của Sự Tận Hưởng</title>
      </Helmet>
      <MobileDD visible={mobileDropdownVisible} toggleMobileDropdown={toggleMobileDropdown}/>
      <div className='home_page'>
        <Header toggleMobileDropdown={toggleMobileDropdown}/>
        <body>
          <Slide1/>
          <Policies/>
          <BST/>
          <Voucher/>
          <Collection/>
          <Category1/>
          <LookBook/>
          <Video/>
          <Instagram/>
          <RightFL/>
        </body>
        <Footer/>
      </div>
    </div>
  );
}