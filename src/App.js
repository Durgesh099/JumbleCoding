import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from "./components/HomePage/Home";
import HomePage from './components/HomePage/HomePage';
import Results from './components/HomePage/TopPlayers'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/top-players" element={<Results />}/>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
