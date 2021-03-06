import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './components/Formulario';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        <Routes>
          <Route path='/' element={<Formulario />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
