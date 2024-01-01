// client/src/App.js

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import WikiPage from './components/WikiPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/wiki/:slug" element={<WikiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
