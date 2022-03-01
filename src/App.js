import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import NavBar from './components/NavBar';
import MyProfile from './components/MyProfile';
import RocketsPage from './components/RocketsPage';
import Missions from './components/Missions';
import { addRocket } from './redux/rockets/rockets';

function App() {
  const url = 'https://api.spacexdata.com/v3/rockets';
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.forEach((item) => {
        const newRocket = {
          id: item.id,
          rocket_name: item.rocket_name,
          description: item.description,
          flickr_images: item.flickr_images,
        };
        dispatch(addRocket(newRocket));
      }));
  }, []);
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
