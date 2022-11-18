import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import data from './data';
import AskQuestion from './pages/askQuestion';
import MainScreen from './pages/MainScreen';
import Replying from './pages/Replying';
import CreateGroup from './pages/CreateGroup';
import ReadListen from './pages/ReadListen';
import WaitReplying from './pages/WaitReplying';

function App() {
  const [groups, setGroups] = useState(data);
  return (
    <Routes>
      <Route path="/" element={<MainScreen data={groups} />} />
      <Route path="/ask/:groupid" element={<AskQuestion setGroups={setGroups} groups={groups} />} />
      <Route path="/createGroup" element={<CreateGroup groups={groups} setGroups={setGroups} />} />
      <Route path="/answer/:groupid" element={<Replying data={groups} />} />
      <Route path="/listen/:groupid" element={<ReadListen data={groups} />} />
      <Route path="/answer/wait/:groupid" element={<WaitReplying />} />
    </Routes>
  );
}

export default App;
