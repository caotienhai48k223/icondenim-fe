import React from 'react'
import './Home.css'
import { useState } from 'react';

export default function Voucher() {
  const [copiedText, setCopiedText] = useState({
    voucher1: false,
    voucher2: false,
    voucher3: false,
    voucher4: false,
  });
  const handleCopyClick = (voucherName,textToCopy) => {
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setCopiedText(prevState => ({
        ...prevState,
        [voucherName]: true
      }));
    setTimeout(() => {
        setCopiedText(prevState => ({
          ...prevState,
          [voucherName]: false
        }));
      }, 5000);
  };

  return (
    <div className='voucher_div'>
      <div className='voucher_container'>
        <div className='voucher_content'>
          <div className='voucher1'>
            <div className='voucher_header'>
              <div className='voucher_name'>VOUCHER</div>
              <div className='voucher_lim'>tối đa 10K</div>
            </div>
            <div className='voucher_body'>10%</div>
            <div className='voucher_footer'>
              <div className='voucher_content'>Nhập mã: S10</div>
              <button className={copiedText.voucher1 ? 'saochep clicked' : 'saochep'} onClick={() => handleCopyClick('voucher1','S10')}>
                {copiedText.voucher1 ? 'Đã sao chép' : 'Sao chép'}
              </button>
            </div>
          </div>
          <div className='voucher2'>
            <div className='voucher_header'>
              <div className='voucher_name'>VOUCHER</div>
              <div className='voucher_lim'>đơn từ 599K</div>
            </div>
            <div className='voucher_body'>
              <div className='voucher_body1'>40,000</div>
              <div className='voucher_body2'>VND</div>
            </div>
            <div className='voucher_footer'>
              <div className='voucher_content'>Nhập mã: S40</div>
              <button className={copiedText.voucher2 ? 'saochep clicked' : 'saochep'} onClick={() => handleCopyClick('voucher2','S40')}>
                {copiedText.voucher2 ? 'Đã sao chép' : 'Sao chép'}
              </button>
            </div>
          </div>
          <div className='voucher3'>
            <div className='voucher_header'>
              <div className='voucher_name'>VOUCHER</div>
              <div className='voucher_lim'>đơn từ 799K</div>
            </div>
            <div className='voucher_body'>
              <div className='voucher_body1'>60,000</div>
              <div className='voucher_body2'>VND</div>
            </div>
            <div className='voucher_footer'>
              <div className='voucher_content'>Nhập mã: S60</div>
              <button className={copiedText.voucher3 ? 'saochep clicked' : 'saochep'} onClick={() => handleCopyClick('voucher3','S60')}>
                {copiedText.voucher3 ? 'Đã sao chép' : 'Sao chép'}  
              </button>
            </div>
          </div>
          <div className='voucher4'>
            <div className='voucher_header'>
              <div className='voucher_name'>VOUCHER</div>
              <div className='voucher_lim'>đơn từ 999K</div>
            </div>
            <div className='voucher_body'>
              <div className='voucher_body1'>80,000</div>
              <div className='voucher_body2'>VND</div>
            </div>
            <div className='voucher_footer'>
              <div className='voucher1_content'>Nhập mã: S80</div>
              <button className={copiedText.voucher4 ? 'saochep clicked' : 'saochep'}onClick={() => handleCopyClick('voucher4','S80')}>
                {copiedText.voucher4 ? 'Đã sao chép' : 'Sao chép'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
