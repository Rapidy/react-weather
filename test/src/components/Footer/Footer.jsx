import React, { useEffect, useState } from 'react';
import './footer.sass';

export default function Footer({ activeTempType, wind, pressure, humidity }) {
  const windDetection = () => {
    if (wind.deg >= 330 || wind.deg <= 40) {
      return 'северный';
    } else if (wind.deg >= 240) {
      return 'западный';
    } else if (wind.deg >= 40 || wind.deg <= 110) {
      return 'восточный';
    } else {
      return 'южный';
    }
  };

  useEffect(() => {
    windDetection();
  }, [wind.deg]);

  useEffect(() => {
    setActiveUnits(activeTempType);
  }, [activeTempType]);

  const [activeUnits, setActiveUnits] = useState(activeTempType);
  const currentUnits = activeUnits === 'metric' ? 'м/c' : 'миль/ч';

  const windSide = windDetection(wind);
  const pressureValue = (pressure / 133.3224) * 100;

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-container__item'>
          <h3>Ветер</h3>
          <p>
            <span>{wind.speed.toFixed()}</span> {currentUnits}, {windSide}
          </p>
        </div>

        <div className='footer-container__item'>
          <h3>Давление</h3>
          <p>
            <span>{pressureValue.toFixed()}</span> мм рт. ст.
          </p>
        </div>
      </div>

      <div className='footer-container'>
        <div className='footer-container__item'>
          <h3>Влажность</h3>
          <p>
            <span>{humidity}</span>%
          </p>
        </div>

        <div className='footer-container__item'>
          <h3>Вероятность дождя</h3>
          <p>
            <span>10</span>%
          </p>
        </div>
      </div>
    </footer>
  );
}
