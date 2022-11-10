import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CryptoListLayout from './project-1/components/crypto-list-layout.component';
import AppTemplatesLayout from './projects/app-templates.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppTemplatesLayout />} />
      <Route path="/crypto" element={<CryptoListLayout />} />
    </Routes>
  );
}

export default App;
