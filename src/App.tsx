import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
