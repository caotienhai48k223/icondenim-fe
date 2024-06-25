import React from 'react'
import { useState } from 'react'

export default function EmailForm() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setEmail('');
    };
  return (
    <div className='email_form'>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập địa chỉ email"
          className='email_input'
          required
        />
        <button type="submit" className='submit_button'>ĐĂNG KÝ</button>
      </form>
    </div>
  )
}
