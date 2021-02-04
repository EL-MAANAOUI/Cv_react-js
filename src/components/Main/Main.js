import React from 'react';
import './Main.css';

export default function Main () {
  return (
    <div className="menu">
      <p className="intro">
        &nbsp;Jeune femme travaillante, qui s’efforce toujours d’atteindre le plus haut niveau possible,
        à n’importe quelle tâche donnée, j’ai un esprit clair et logique avec une approche pratique
        {' '}
        de la résolution de problèmes et une volonté de voir les choses jusqu’à l’achèvement.
      </p>

      <img src="/images/done.png" alt="" width="50px" className="done" />
      <h2 className="skills">
        &nbsp;&nbsp;&nbsp;&nbsp;Langage de programmation et Framework:
      </h2>
      <h3 className="front">FRONT END:</h3>
      <p6 className="aa">
        +HTML/CSS<br />
        +JAVASCRIPT<br />
        +REACT NATIVE<br />
        +ANGULAR<br />
      </p6>
      <h3 className="back">BACK END:</h3>
      <p6 className="bb">
        +JAVA/JEE<br />
        +SPRING<br />
        +PHP<br />
        +HIBERNATE<br />
        +FIREBASE<br />
      </p6>
      
        <h3 className="model">MODELISATION LANGUAGES & OUTILS:</h3>
        <div style={{display:'flex',flexDirection:'column',marginTop:"80px",marginLeft:"149px"}} >
        <p6 className="ff">
          +UML
        </p6>
        <p6 className="ff">+SIXSIGMA </p6>
      </div>
      <img src="/images/language.png" alt="" width="50px" className="lng" />
      <h2 className="langue"> Langues:</h2>
      <div className="cc">

        <strong>Français:</strong>&nbsp;Niveau avancé<br />
        <strong>Anglais:</strong>&nbsp;Niveau avancé<br />
        <strong>Arabe:</strong>&nbsp; Maternelle<br />
      </div>
    </div>
  );
}
