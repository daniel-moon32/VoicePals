import './App.css';
import {
  Routes, Route,
} from 'react-router-dom';
import AskQuestion from './pages/askQuestion';
import MainScreen from './pages/MainScreen';

function App() {
  return (
    // <AskQuestion />
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/askQuestion" element={<AskQuestion />} />
    </Routes>
  );
}

export default App;
