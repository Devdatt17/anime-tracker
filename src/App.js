import './App.css';
import AnimeNavbar from './components/AnimeNavbar';
import AnimeFooter from './components/AnimeFooter';
import MainPage from './components/MainPage';
import AnimeDetails from './components/AnimeDetails'
import AnimeList from './components/AnimeList'

import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <AnimeNavbar />
      <Routes>
        <Route path="/" exact element={<MainPage />}/>
        <Route path="/anime" element={<AnimeDetails />}/>
        <Route path="/animelist" element={<AnimeList/>}/>
      </Routes>
      <AnimeFooter />
    </div>
  );
}

export default App;
