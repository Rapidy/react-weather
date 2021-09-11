import React from 'react';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-container__item'>
          <h3>Ветер</h3>
          <p>5 м/c, западный</p>
        </div>

        <div className='footer-container__item'>
          <h3>Давление</h3>
          <p>752 мм рт. ст.</p>
        </div>
      </div>

      <div className='footer-container'>
        <div className='footer-container__item'>
          <h3>Влажность</h3>
          <p>60%</p>
        </div>

        <div className='footer-container__item'>
          <h3>Вероятность дождя</h3>
          <p>10%</p>
        </div>
      </div>
    </footer>
  );
}
