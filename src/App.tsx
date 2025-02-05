import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { TipsZeroWastePage } from './Pages/TipsZeroWastePage/TipsZeroWastePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="headline">
          LOVE LESS: Your guide to a sustainable lifestyle.
        </p>

        <p>
          Dear visitor,
          <br />
          welcome at Webpage about your new life-style.
          <br />
          You can find here information about minimalism, ecology and zero-waste
          ways of living.
        </p>
      </header>
      <div className="buttons">
        <Link to="/Pages/ShopsAroundPage/ShopsAroundPage" className="button">
          Zero-Waste Shops Around
        </Link>

        <Link
          to="/Pages/TestYourLifeStylePage/TestYourLifeStylePage"
          className="button"
        >
          Test Your Life-style
        </Link>
        <Link
          to="/Pages/TipsZeroWastePage/TipsZeroWastePage"
          className="button"
        >
          Eco and Zero-Waste Tips
        </Link>
      </div>
    </div>
  );
}

export default App;
