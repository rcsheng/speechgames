import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ConductorGame from './components/ConductorGame';
import TripleStepGame from './components/TripleStepGame';
import ConvictionPrompts from './components/ConvictionPrompts';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Public Speaking Games</h1>
          </header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/conductor-game">Conductor Game</Link>
              </li>
              <li>
                <Link to="/triple-step-game">Triple Step Game</Link>
              </li>
              <li>
                <Link to="/conviction-prompts">Conviction Prompts</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <Routes>
            <Route path="/conductor-game" element={<ConductorGame />} />
            <Route path="/triple-step-game" element={<TripleStepGame />} />
            <Route path="/conviction-prompts" element={<ConvictionPrompts />} />
            <Route path="/" element={
              <>
                <h2>Welcome to the Public Speaking Games!</h2>
                <p>Select a game from the menu on the left to get started.</p>
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
