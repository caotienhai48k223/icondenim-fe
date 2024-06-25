import React from 'react'
import Header from '../Header/Header'
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';

export default function QuanNam() {
  return (
    <div>
      <Helmet>
        <title>Quần Thời Trang Cao Cấp, Hàng Hiệu Đủ Loại - ICONDENIM</title>
      </Helmet>
      <div className='quannam_page'>
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
