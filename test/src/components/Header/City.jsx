import React from 'react';

import locationIcon from '../../img/location.svg';

export default function City({ name, onSetMyPosition }) {
  return (
    <div className='header-city'>
      <h2 className='header-city__name'>{name}</h2>
      <div className='header-city-btns'>
        <button className='header-city-btns__btn'>Сменить город</button>
        <button onClick={onSetMyPosition} className='header-city-btns__btn'>
          <img src={locationIcon} alt='Иконка местоположения' />
          Мое местоположение
        </button>
      </div>
    </div>
  );
}
