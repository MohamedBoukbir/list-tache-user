import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './TaskList.css'; // Importe le fichier CSS
import { faCheck,faClock } from '@fortawesome/free-solid-svg-icons'; // Use the correct import statement
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskList = () => {
  const { userId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(10); // Nombre de tâches par page, tu peux ajuster ce nombre selon tes besoins
  // Calculer le nombre total de pages
  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  // Fonction pour changer de page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  useEffect(() => {
    // Fonction pour récupérer les données de l'API
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        setTasks(response.data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs :', error);
      }
    };

    // Appeler la fonction pour récupérer les données
    fetchTasks();
  }, [userId]);
    // Calculer l'index de la première et de la dernière tâche sur la page actuelle
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  return (
    // <div>
    //   <h2>Tâches de l'Utilisateur</h2>
    //   <ul>
    //     {tasks.map((task) => (
    //       <li key={task.id}>{task.title}</li>
    //     ))}
    //   </ul>
    // </div>
    <div className="task-list">
    <h2 className='titleh2'>Tâches de l'Utilisateur</h2>
    {currentTasks.length > 0 ? (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tâche</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.completed ? <FontAwesomeIcon icon={faCheck} className="green" /> : <FontAwesomeIcon icon={faClock} className="red" />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p className="no-tasks">Aucune tâche disponible pour cet utilisateur.</p>
    )}
    {/* /// */}
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button key={page} onClick={() => handlePageChange(page)}>
              {page}
            </button>
          ))}
        </div>
      )}
  </div>
  );
};

export default TaskList;