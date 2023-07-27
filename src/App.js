import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      {/* <h1 className="headh1">Gestion des Tâches</h1> */}
      <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/tasks/:userId" element={<TaskList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
