import './App.css';
import "./Assets/scss/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Scaller } from './components/Scaller';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { OurTeam } from './components/OurTeam';
import { OurProjects } from './components/OurProjects';
import { OurClients } from './components/OurClients';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="App">
      <Scaller />
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <OurTeam />
      <OurProjects />
      <OurClients />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
