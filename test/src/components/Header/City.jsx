import axios from 'axios';
import React, { useEffect, useState } from 'react';

import locationIcon from '../../img/location.svg';

export default function City({ name, onSetMyPosition, onChangeCity }) {
  const [showSearch, setShowSearch] = useState(false);
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const onShowSearch = () => {
    setShowSearch(true);
    setCity('');
  };

  const onSave = () => {
    setShowSearch(false);

    const activeCity = cities.filter((item) => item.name === city).shift();
    if (city) onChangeCity(activeCity.coords);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/cities.json')
      .then((resp) => setCities(resp.data.cities));
  }, []);

  const availableCities = cities.map((item) => {
    return (
      <option key={item.name} value={item.name}>
        {item.name}
      </option>
    );
  });

  return (
    <div className='header-city'>
      <h2 className='header-city__name'>{name}</h2>
      <div className='header-city-btns'>
        <button onClick={onShowSearch} className='header-city-btns__btn'>
          Сменить город
        </button>
        <button onClick={onSetMyPosition} className='header-city-btns__btn'>
          <img src={locationIcon} alt='Иконка местоположения' />
          Мое местоположение
        </button>
      </div>

      <div className={`header-city-change ${showSearch ? 'show' : ''}`}>
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          type='text'
          className='header-city-change__input'
          placeholder='Введите название города'
          list='cities'
        />

        <datalist className='header-city-change__datalist' id='cities'>
          {availableCities}
        </datalist>

        <button onClick={onSave} className='header-city-change__btn'>
          ОК
        </button>
      </div>
    </div>
  );
}
