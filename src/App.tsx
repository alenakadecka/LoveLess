import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './App.css';
import { ShopsAroundPage } from './Pages/ShopsAroundPage/ShopsAroundPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="headline">Love Less</p>
        <p className="title-description">
          Your guide to a sustainable lifestyle.
        </p>
        <p>
          Dear visitor, welcome at Webpage about your new life-style. You can
          find here information about minimalism, ecology and zero-waste ways of
          living.
        </p>
      </header>

      <div className="buttons">
        <Link to="/Pages/ShopsAroundPage/ShopsAroundPage" className="button">
          Zero-Waste Shops Around
        </Link>
        <Link to="/Pages/SeparateWastePage/" className="button">
          Differencies in Separation
        </Link>
        <Link to="/Pages/TestYourLifeStylePage/" className="button">
          Test Your Life-style
        </Link>
      </div>
    </div>
  );
}

export default App;
