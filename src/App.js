import './App.css';

import { Routes, Route } from 'react-router-dom';
import AskQuestion from './pages/askQuestion';
import MainScreen from './pages/MainScreen';
import Replying from './pages/Replying';
import CreateGroup from './pages/CreateGroup';
import Listen from './pages/Listen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/ask/:groupid" element={<AskQuestion />} />
      <Route path="/createGroup" element={<CreateGroup />} />
      <Route path="/answer/:groupid" element={<Replying />} />
      <Route path="/listen/:groupid" element={<Listen />} />
    </Routes>
  );
}

export default App;
