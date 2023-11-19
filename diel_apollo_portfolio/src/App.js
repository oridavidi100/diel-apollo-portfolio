import './style/App.css';
// import './style/styles.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Router>
      <Navbar />
    </div>
  );
}

export default App;
