import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { UseRefPage } from './components/UseRefPage/UseRefPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/useref" element={<UseRefPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;