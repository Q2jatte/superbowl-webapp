import React, { useState, useEffect } from "react";
import axios from "axios";
import GameDateTime from "./GameDateTime";

function GamesList(props) {  

  const [matchs, setMatchs] = useState([]);

  useEffect(() => {
    // Fonction pour effectuer la requête GET à l'API
    const fetchMatchs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/games?filter="+ props.filter);

        // Mettre à jour l'état avec les données de la réponse
        console.log(response.data);
        setMatchs(response.data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des matchs :",
          error
        );
      }
    };

    // Appel de la fonction pour récupérer les matchs lors du montage du composant
    fetchMatchs();
  },[props.filter]); // props.filter dans le tableau de dépendances pour réagir aux changements

  return (
    <div>      
      <ul>
        {matchs          
          .map((match, index) => (
          <li className="match-line" key={index}>
            <a href="#">
              <div className="row">
                <div className="col-4 text-highlight text-align-center d-flex flex-column align-items-center justify-content-center">
                  <img src={match.idTeam1.logo} className="mini-logo-team" />
                  {match.idTeam1.shortName}
                </div>

                <div className="col-4 text-highlight d-flex flex-column align-items-center justify-content-center">
                  <GameDateTime dateString={match.startDateTime} started={match.started}></GameDateTime>
                </div>

                <div className="col-4 text-highlight d-flex flex-column align-items-center justify-content-center">
                  <img src={match.idTeam2.logo} className="mini-logo-team" />
                  {match.idTeam2.shortName}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GamesList;
