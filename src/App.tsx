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
          find here information about minimalism, ecology and package-free ways
          of living.
        </p>
      </header>

      <div className="buttons">
        <Link to="/Pages/ShopsAroundPage/ShopsAroundPage">
          <div className="button">Package-free shops around</div>
        </Link>
        <div className="button">Differencies in Separation </div>
        <div className="button">Test Your Life-style</div>
      </div>
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/Pages/ShopsAroundPage/ShopsAroundPage',
    element: <ShopsAroundPage />,
  },
]);

const rootElement = document.getElementById('app')!;
if (!rootElement) {
  throw new Error("Root element with id 'app' not found");
}

createRoot(document.querySelector('#app')!).render(
  <RouterProvider router={router} />,
);
export default App;
