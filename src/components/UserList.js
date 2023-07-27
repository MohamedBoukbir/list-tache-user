import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// get our fontawesome imports
import { faHome, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(5);
  // Calculer le nombre total de pages
  const totalPages = Math.ceil(users.length / userPerPage);

  // Fonction pour changer de page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };



  useEffect(() => {
    // Fonction pour récupérer les données de l'API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        setUsers(response.data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs :', error);
      }
    };

    // Appeler la fonction pour récupérer les données
    fetchUsers();
  }, []);



   // Calculer l'index de la première et de la dernière tâche sur la page actuelle
   const indexOfLastUser = currentPage * userPerPage;
   const indexOfFirstUser = indexOfLastUser - userPerPage;
   const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);


  return (
    <div className="task-list">
      <h2 className='titleh2'>Liste des Utilisateurs</h2>
      {/* <ul>
        {users.map((user) => (

          <li key={user.id}>

            <Link to={`/tasks/${user.id}`}>{user.name}</Link> 
          </li>


        ))}
      </ul> */}
       {/* // table // */}
          {currentUser.length > 0 ? (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Les Tâches</th>
          </tr>
        </thead>
        <tbody>
          {currentUser.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email }</td>
              <td key={user.id}>   <Link to={`/tasks/${user.id}`}> <FontAwesomeIcon  className="blue" icon={faListCheck} /></Link>   </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p className="no-tasks">Aucune tâche disponible pour cet utilisateur.</p>
    )}
     {/* // end table // */}
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
 
export default UserList;