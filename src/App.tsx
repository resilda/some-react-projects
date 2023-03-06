import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CryptoListLayout from './template-1/components/crypto-list-layout.component';
import AppTemplatesLayout from './application-templates/app-templates.component';
import AllExercises from './exercises-template/all-exercises';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppTemplatesLayout />} />
      <Route path="/crypto" element={<CryptoListLayout />} />
      <Route path="/exercises" element={<AllExercises />} />
    </Routes>
  );
}

export default App;
