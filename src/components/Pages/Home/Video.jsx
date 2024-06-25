import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './Home.css';

export default function Video() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='video_div'>
      <div className='video_container' onClick={openModal}>
        <img
          src='https://file.hstatic.net/1000360022/file/section_video_bg_b28c3a5ca6ed4e9491fe075564f91f31_2048x2048.jpg'
          alt='video_img'
          className='video_img'
        />
        <img
          src='https://file.hstatic.net/1000360022/file/play_black_button-removebg-preview_240d779ca6a24d2087ea9d2da2f66794.png'
          alt='play_img'
          className='play_img'
        />
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close_button">X</button>
        <div className='video_wrapper'>
          <iframe
            width="1000"
            height="562.5"
            src="https://www.youtube.com/embed/9tSmmeZrtUo?autoplay=1&rel=0"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </ReactModal>
    </div>
  );
}
