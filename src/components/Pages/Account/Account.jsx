import React from 'react'
import Header from '../../Header/Header';
import { Helmet } from 'react-helmet';
import Footer from '../../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import './Account.css'
import { useState } from 'react';

export default function Account() {
  const history = useNavigate();

  const listAcc = [
    {phonenumber:'0973481940', password: 'Haitank4@'}, 
    {phonenumber:'0352721386', password: 'Icondenim123+'},
    {phonenumber:'0978186037', password: 'Hihihi234*'},
    {phonenumber:'0389201983', password: 'Hahihi098%'}
  ]

  const [activeAccount, setActiveAccount] = useState('login');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [touchedPhone, setTouchedPhone] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);

  const resetStates = () => {
    setPhoneNumber('');
    setPassword('');
    setPhoneError('');
    setPasswordError('');
    setShowPassword(false);
    setLoginAttempts(0);
    setTouchedPhone(false);
    setTouchedPassword(false);
  };

  const showAccType = (id) => {
    setActiveAccount(id);
    resetStates();
  }
 
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    if (touchedPhone) {
      setPhoneError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (touchedPassword) {
      setPasswordError('');
    }
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^0\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (pass) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!+-.,#$%*?&])[A-Za-z\d@$!+-.,#$%*?&]{8,}$/;
    return passwordRegex.test(pass);
  };

  const handleBlurPhone = () => {
    setTouchedPhone(true);
    if (!phoneNumber) {
      setPhoneError('Vui lòng nhập số điện thoại.');
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Số điện thoại không hợp lệ.');
      return;
    }

    const account = listAcc.find(acc => acc.phonenumber === phoneNumber);
    if (!account) {
      setPhoneError('Số điện thoại chưa được đăng ký.');
    }
  };

  const handleBlurPassword = () => {
    setTouchedPassword(true);
    if (!password) {
      setPasswordError('Vui lòng nhập mật khẩu.');
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError('Mật khẩu không hợp lệ.');
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouchedPhone(true);
    setTouchedPassword(true);

    if (!phoneNumber) {
      setPhoneError('Vui lòng nhập số điện thoại.');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Số điện thoại không hợp lệ.');
      return;
    }

    const account = listAcc.find(acc => acc.phonenumber === phoneNumber);
    if (!account) {
      setPhoneError('Số điện thoại chưa được đăng ký.');
      return;
    }

    if (!password) {
      setPasswordError('Vui lòng nhập mật khẩu.');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Mật khẩu không hợp lệ.');
      return;
    }

    if (account.password !== password) {
      setPasswordError('Mật khẩu không đúng.');
      setLoginAttempts(prev => prev + 1);
      if (loginAttempts + 1 >= 3) {
        setPasswordError('Bạn có quên mật khẩu?');
      }
      return;
    }

    // Đăng nhập thành công
    history.push('/home'); // Điều hướng đến trang chủ
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    setTouchedPhone(true);
    if (!phoneNumber) {
      setPhoneError('Vui lòng nhập số điện thoại.');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Số điện thoại không hợp lệ.');
      return;
    }

    const account = listAcc.find(acc => acc.phonenumber === phoneNumber);
    if (account) {
      setPhoneError('Số điện thoại đã được đăng ký.');
      return;
    }

    // Giả lập gửi mã xác nhận
    alert(`Mã xác nhận đã được gửi tới số điện thoại ${phoneNumber}`);
  };

  const handleBlurRegisterPhone = () => {
    setTouchedPhone(true);
    if (!phoneNumber) {
      setPhoneError('Vui lòng nhập số điện thoại.');
      return;
    }
    
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Số điện thoại không hợp lệ.');
      return;
    }

    const account = listAcc.find(acc => acc.phonenumber === phoneNumber);
    if (account) {
      setPhoneError('Số điện thoại đã được đăng ký.');
    }
  };

  return (
    <div>
      <Helmet>
        <title>Tài khoản</title>
      </Helmet>
      <div className='account_page'>
        <Header />
        <body>
          <div className='account_div'>
            <div className='account_container'>
              <div className='account_title'>
                <div className='account_detail'>ĐĂNG NHẬP TÀI KHOẢN</div>
              </div>
              <div className='account_body'>
                <div className='account_main'>
                  <div className='account_form'>
                    <div className='account_type'>
                      <div className={`account_text ${activeAccount === 'login' ? 'show_acc' : ''}`} onClick={() => showAccType('login')}>
                        <Link>ĐĂNG NHẬP</Link>
                      </div>
                      <div className={`account_text ${activeAccount === 'register' ? 'show_acc' : ''}`} onClick={() => showAccType('register')}>
                        <Link>ĐĂNG KÝ</Link>
                      </div>
                    </div>
                    <div className={`content_acc ${activeAccount === 'login' ? 'show_acc' : ''}`}>
                      <form acceptCharset='UTF-8' action="/account/login" id='form_login' method='post' onSubmit={handleSubmit}>
                        <div className='login_sđt'>
                          <input 
                          type="text" 
                          id='sđt' 
                          placeholder='Nhập số điện thoại' 
                          className='input' 
                          value={phoneNumber}
                          onChange={handlePhoneChange}
                          onBlur={handleBlurPhone}
                          required/>
                          {phoneError && <div className='error_message'>{phoneError}</div>}
                        </div>
                        <div className='login_password'>
                          <input 
                          type={showPassword ? "text" : "password"}
                          id='password' 
                          placeholder='Mật khẩu' 
                          className='input' 
                          value={password}
                          onChange={handlePasswordChange}
                          onBlur={handleBlurPassword}
                          required/>
                          <div className='look_password' onClick={() => setShowPassword(!showPassword)}>
                            <i class={`fa-regular fa-eye${showPassword ? '' : '-slash'} eye_ic`}></i>
                          </div>
                        </div>
                        {passwordError && <div className='error_message'>{passwordError}</div>}
                        <div className='login_action'>
                          <input type="submit" className='login_button' value='ĐĂNG NHẬP'/>
                          <div className='lose_password'><Link>Quên mật khẩu?</Link></div>
                        </div>
                      </form>
                    </div>
                    <div className={`content_acc ${activeAccount === 'register' ? 'show_acc' : ''}`}>
                      <form acceptCharset='UTF-8' action="/account/login" id='form_register' method='post' onSubmit={handleRegisterSubmit}>
                        <div className='login_sđt'>
                          <input 
                          type="text"
                          id='sđt'
                          placeholder='Nhập số điện thoại'
                          name='phone_number'
                          className='input'
                          value={phoneNumber}
                          onChange={handlePhoneChange}
                          onBlur={handleBlurRegisterPhone}
                          required
                          />
                          {phoneError && <div className='error_message'>{phoneError}</div>}
                        </div>
                        <div className='register_action'>
                          <input type="submit" className='register_button' value='GỬI MÃ XÁC NHẬN'/>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
        <Footer />
      </div>
    </div>
  );
}
