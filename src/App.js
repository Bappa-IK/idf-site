import './App.css';
import Footer from './components/Layout/Footer';
import Main from './components/pages/Main';
import Navbar from './components/Layout/Navbar';
import About from './components/pages/About';
import Media from './components/pages/Media';
import Contact from './components/pages/Contact';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/media' element={<Media />} />
          <Route path='/contact' element={<Contact />} />              
        </Routes>

        <Footer />
      </BrowserRouter>

      </div>
  );
}

export default App;
