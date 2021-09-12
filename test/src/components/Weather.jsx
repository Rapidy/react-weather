import React, { useEffect, useState } from 'react';

import { sun, cloud, partlyCloudy, storm, rain } from '../img/weatherTypes';

export default function Weather({ temp, descr, weatherId }) {
  const description = descr[0].toUpperCase() + descr.slice(1, descr.length);

  const [currentWeather, setCurrentWeather] = useState('');

  const weatherDetection = () => {
    if (weatherId >= 200 && weatherId < 300) {
      setCurrentWeather(storm);
    } else if (weatherId >= 300 && weatherId < 600) {
      setCurrentWeather(rain);
    } else if (weatherId === 800) {
      setCurrentWeather(sun);
    } else if (weatherId < 803) {
      setCurrentWeather(partlyCloudy);
    } else {
      setCurrentWeather(cloud);
    }
  };

  useEffect(() => {
    weatherDetection();
  }, [weatherId]);

  return (
    <main className='weather'>
      <h1>
        <img src={currentWeather} alt='Weather icon' />
        {temp.toFixed()}º
      </h1>
      <span>{description}</span>
    </main>
  );
}
