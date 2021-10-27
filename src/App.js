import './App.css';
import AnimeNavbar from './components/AnimeNavbar';
import AnimeFooter from './components/AnimeFooter';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <AnimeNavbar />
        <MainPage />
      <AnimeFooter />
    </div>
  );
}

export default App;
