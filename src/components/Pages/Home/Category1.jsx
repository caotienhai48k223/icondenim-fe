import React, { useState } from 'react';
import './Home.css';
import HangMoi from './HangMoi';
import BanChay from './BanChay';
import TechUrbanJeans from './TechUrbanJeans';

export default function Category1() {
  const [activeContent, setActiveContent] = useState('hangmoi');

  const showContent = (id) => {
    setActiveContent(id);
  };

  return (
    <div className='category1_div'>
      <div className='category1_container'>
        <div className='category1_content'>
          <div className={`category1_item ${activeContent === 'hangmoi' ? 'active' : ''}`} onClick={() => showContent('hangmoi')}>
            Hàng mới
          </div>
          <div className={`category1_item ${activeContent === 'banchay' ? 'active' : ''}`} onClick={() => showContent('banchay')}>
            Bán chạy
          </div>
          <div className={`category1_item ${activeContent === 'techurbanjeans' ? 'active' : ''}`} onClick={() => showContent('techurbanjeans')}>
            Tech Urban Jeans
          </div>
        </div>
        <div className={`content ${activeContent === 'hangmoi' ? 'active' : ''}`}>
          <HangMoi />
        </div>
        <div className={`content ${activeContent === 'banchay' ? 'active' : ''}`}>
          <BanChay />
        </div>
        <div className={`content ${activeContent === 'techurbanjeans' ? 'active' : ''}`}>
          <TechUrbanJeans />
        </div>
      </div>
    </div>
  );
}

