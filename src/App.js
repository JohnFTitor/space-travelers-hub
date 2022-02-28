import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MyProfile from './components/MyProfile';
import RocketsPage from './components/RocketsPage';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<RocketsPage />} />
          <Route exact path="missions" element={<Missions />} />
          <Route exact path="/profile" element={<MyProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
