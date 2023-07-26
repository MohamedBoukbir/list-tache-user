import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <h1>Gestion des Tâches</h1>
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/tasks/:userId" element={<TaskList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
