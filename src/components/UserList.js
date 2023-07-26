import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Appeler l'API REST pour récupérer la liste des utilisateurs
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Liste des Utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/tasks/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default UserList;