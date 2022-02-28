import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>I&aphos;m the main page </h1>} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
