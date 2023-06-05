import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarLayout from './components/NavbarLayout';
import Calculator from './components/Calculator';
import Quote from './components/GetQuote';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
