import logo from './logo.svg';
import './App.css';

import './Assets/scss/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Scaller } from './components/Scaller';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { OurTeam } from './components/OurTeam';

function App() {
  
  return (
    <div className="App">
    <Scaller/>
  <Header/>
  <Hero/>
  <AboutUs/>
  <Services/>
  <OurTeam/>
   
    </div>
  );
}

export default App;
