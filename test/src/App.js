import './App.sass';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Weather from './components/Weather';

function App() {
  return (
    <div className='app clear'>
      <div className='app-container'>
        <Header />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
