import React from 'react';
import './App.css';
import ContentList from './component/ContentList';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Contentdata from './component/Contentdata';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContentList />} />
          <Route path="/content" element={<Contentdata />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
