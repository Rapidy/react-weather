import React from 'react';

export default function Temp({ activeTempType, onTempTypeChange }) {
  return (
    <div className='header-temp'>
      <button
        id='1'
        onClick={onTempTypeChange}
        className={`header-temp__btn ${activeTempType === 'metric' ? 'active' : ''}`}>
        C
      </button>
      <button
        id='2'
        onClick={onTempTypeChange}
        className={`header-temp__btn ${activeTempType === 'imperial' ? 'active' : ''}`}>
        F
      </button>
    </div>
  );
}
