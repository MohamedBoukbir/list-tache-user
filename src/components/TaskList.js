import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TaskList.css'; // Importe le fichier CSS
import 'bootstrap/dist/css/bootstrap.min.css';

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
    // Appeler l'API REST pour récupérer les tâches de l'utilisateur sélectionné
     
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setTasks(data));
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
      /// 
      // <table className="table">
      //   <thead>
      //     <tr>
      //       <th>ID</th>
      //       <th>Tâche</th>
      //       <th>Statut</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {currentTasks.map((task) => (
      //       <tr key={task.id}>
      //         <td>{task.id}</td>
      //         <td>{task.title}</td>
      //         <td>{task.completed ? 'Terminée' : 'En cours'}</td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </table>
      /// test table boot strap
      <table id="example" class="table table-hover table-bordered text-center table-responsive">
      <thead class="table table-light">
          <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">effectif</th>
              <th scope="col">start_time</th>
              <th scope="col">end_time</th>
              <th scope="col">date</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <th scope="row">#</th>
              <td>test1</td>
              <td>tsest2</td>
              <td>test3</td>
              <td>test4</td>
              <td>test5</td>
          </tr>
  
      </tbody>
  </table>
      /// 
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