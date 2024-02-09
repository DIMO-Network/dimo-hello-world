import logo from './dimo_logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthButton from './AuthButton';
import AuthRedirectPage from './AuthRedirectPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<><h3>Create React App boilderplate for Login to DIMO</h3><AuthButton /></>} exact />
            <Route path="/oauth/callback" element={<AuthRedirectPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
