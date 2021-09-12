import React from 'react';
import './header.sass';

import City from './City';
import Temp from './Temp';

export default function Header({
  name,
  activeTempType,
  onTempTypeChange,
  onSetMyPosition,
}) {
  return (
    <div className='header'>
      <City name={name} onSetMyPosition={onSetMyPosition} />
      <Temp activeTempType={activeTempType} onTempTypeChange={onTempTypeChange} />
    </div>
  );
}
