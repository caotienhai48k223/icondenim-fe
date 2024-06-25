import React from 'react'
import Header from '../Header/Header'
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';

export default function Outlet() {
  return (
    <div>
      <Helmet>
        <title>100++ SẢN PHẨM LẺ SIZE GIÁ TỐT</title>
      </Helmet>
      <div className='outlet_page'>
        <Header/>
        <body>
          <div className='lồn'>
          </div>
        </body>
        <Footer/>
      </div>
    </div>
  );
}