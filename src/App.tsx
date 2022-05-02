import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './views/landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        {/* <Route path='/mint' element={<MintingPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
