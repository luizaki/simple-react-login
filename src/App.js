import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './Login';
import Landing from './Landing';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="*" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;