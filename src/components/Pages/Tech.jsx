import React from 'react'
import Header from '../Header/Header'
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';

export default function Tech() {
  return (
    <div>
      <Helmet>
        <title>TechUrban® Jeans</title>
      </Helmet>
      <div className='tech_page'>
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
