import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TaskList = () => {
  const { userId } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Appeler l'API REST pour récupérer les tâches de l'utilisateur sélectionné
     
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, [userId]);

  return (
    <div>
      <h2>Tâches de l'Utilisateur</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;