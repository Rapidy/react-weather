import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.sass';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Weather from './components/Weather';
import Preloader from './components/Preloader';

function App() {
  const [weather, setWeather] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTempType, setActiveTempType] = useState('metric');
  const [coords, setCoords] = useState({
    lat: 54.9924,
    long: 73.3686,
  });

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=50593473d5676fb8352c434138876ed0&lang=ru&units=${activeTempType}`,
      )
      .then((resp) => setWeather(resp.data))
      .then(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=50593473d5676fb8352c434138876ed0&lang=ru&units=${activeTempType}`,
      )
      .then((resp) => setWeather(resp.data));
  }, [activeTempType, coords]);

  const onTempTypeChange = (e) => {
    e.target.id === '1' ? setActiveTempType('metric') : setActiveTempType('imperial');
  };

  const onSetMyPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCoords({ lat: position.coords.latitude, long: position.coords.longitude });
      });
    } else {
      alert('Ваш браузер не поддерживает гео-локацию');
    }
  };

  console.log(weather);

  return (
    <div className='app clear'>
      {isLoaded ? (
        <div className='app-container'>
          <Header
            name={weather.name}
            activeTempType={activeTempType}
            onTempTypeChange={onTempTypeChange}
            onSetMyPosition={onSetMyPosition}
          />
          <Weather
            temp={weather.main.temp}
            descr={weather.weather[0].description}
            weatherId={weather.weather[0].id}
          />
          <Footer
            activeTempType={activeTempType}
            wind={weather.wind}
            pressure={weather.main.pressure}
            humidity={weather.main.humidity}
          />
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default App;
