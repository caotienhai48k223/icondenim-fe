import React from 'react'
import Header from '../Header/Header'
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';

export default function NewProduct() {
  return (
    <div>
      <Helmet>
        <title>Quần Áo Nam Mới Lên Kệ Hôm Nay - Mua ngay Sale 10%</title>
      </Helmet>
      <div className='newproduct_page'>
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