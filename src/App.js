import './App.css';
import { Route, Routes } from 'react-router-dom';

// components
import Home from "./pages/Home/Home"
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
