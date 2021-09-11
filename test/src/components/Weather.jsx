import React from 'react';

import weatherIcon from '../img/sun.svg';

export default function Weather() {
  return (
    <main className='weather'>
      <h1>
        <img src={weatherIcon} alt='Weather icon' />
        19º
      </h1>
      <span>Преимущественно солнечно</span>
    </main>
  );
}
