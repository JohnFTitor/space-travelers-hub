import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import NavBar from './components/NavBar';
import MyProfile from './components/MyProfile';
import RocketsPage from './components/RocketsPage';
import MissionsPage from './components/MissionsPage';
import { filterRocketInfo } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterRocketInfo());
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<RocketsPage />} />
          <Route exact path="missions" element={<MissionsPage />} />
          <Route exact path="/profile" element={<MyProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
