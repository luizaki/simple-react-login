import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './Login';
import Landing from './Landing';

function App() {
  return (
    <div className="page">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="*" element={<Login />} />
            </Routes>

            <footer className="footer"><a href="https://github.com/luizaki/simple-react-login">Made by Francine Louise Sanchez.</a></footer>
        </BrowserRouter>
    </div>
  );
}

export default App;