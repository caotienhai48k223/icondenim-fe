import React from 'react'
import Header from '../Header/Header'
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';

export default function AoNam() {
  return (
    <div>
      <Helmet>
        <title>Áo Nam Cao Cấp, Chuẩn Thương Hiệu Local Brand</title>
      </Helmet>
      <div className='aonam_page'>
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