import React from 'react';
import './header.sass';

import City from './City';
import Temp from './Temp';

export default function Header() {
  return (
    <div className='header'>
      <City />
      <Temp />
    </div>
  );
}
