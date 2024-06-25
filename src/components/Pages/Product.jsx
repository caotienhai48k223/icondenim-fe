import React from 'react'
import Header from '../Header/Header'
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';

export default function Product() {
  return (
    <div>
      <Helmet>
        <title>Tất Cả Sản Phẩm - Thời Trang Đa Dạng Phong Cách</title>
      </Helmet>
      <div className='product_page'>
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
