// Home.js
import React from 'react';
import './Home.css'; // Importe le fichier CSS
import peopleWorkingImage from '../assets/equipe.jpg';// Importe l'image
// import logo from './logo.svg';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenue sur notre application de gestion des tâches !</h1>
      <p>
        Cette application vous permet de gérer les listes de tâches des différents utilisateurs.
        Vous pouvez afficher les tâches pour chaque utilisateur en cliquant sur son nom dans la liste des utilisateurs.
      </p>
      <p>
        N'hésitez pas à explorer les différentes fonctionnalités de l'application .
      </p>
      <p>
        Profitez de cette application simple et conviviale pour gérer efficacement les tâches de votre équipe !
      </p>
    </div>
  //   <div className="home-container">
  //   <div className="content-container">
  //     <h1>Bienvenue sur notre application de gestion des tâches !</h1>
  //     <p>
  //       Cette application vous permet de gérer les listes de tâches des différents utilisateurs.
  //       Vous pouvez afficher les tâches pour chaque utilisateur en cliquant sur son nom dans la liste des utilisateurs.
  //     </p>
  //     <p>
  //       N'hésitez pas à explorer les différentes fonctionnalités de l'application et à ajouter, modifier ou supprimer des tâches selon vos besoins.
  //     </p>
  //     <p>
  //       Profitez de cette application simple et conviviale pour gérer efficacement les tâches de votre équipe !
  //     </p>
  //   </div>
  //   <div className="image-container">
  //     <img src={peopleWorkingImage} alt="Personnes travaillant ensemble" />
  //   </div>
  // </div>
  );
};

export default Home;