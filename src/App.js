import './App.css';
import { Routes, Route } from 'react-router-dom';
import AskQuestion from './pages/askQuestion';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/askQuestion" element={<AskQuestion />} />
    </Routes>
  );
}

export default App;
