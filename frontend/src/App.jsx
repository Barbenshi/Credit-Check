import './assets/styles/main.css';
import { About } from './views/About';
import { Home } from './views/Home';
import { CarIndex } from './views/CarIndex';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { CarDetails } from './views/CarDetails';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <section className='views'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/car" element={<CarIndex />} />
              <Route path="/car/:id" element={<CarDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Home />} />
            </Routes>
        </section>
        <Footer/>
      </Router>
    </>
  );
}

export default App
