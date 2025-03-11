import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CocheProvider } from './CocheContexto';
import Catalog from './Catalog';
import  Header  from './Header';
import  Formulario  from './Formulario';
import  SobreNosotros  from './SobreNosotros';
import './Header.css'

function App() {
  return (
    <CocheProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </Router>
    </CocheProvider>
  );
}

export default App;