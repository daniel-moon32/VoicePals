import './App.css';

import DaysLeft from './components/days_left';
import HeaderExample from './pages/HeaderExample';
import TimeTravel from './components/time_travel';

function App() {
  return (
    <div>
      <HeaderExample />
      <br />
      <TimeTravel />
      <DaysLeft />
    </div>
  );
}

export default App;
