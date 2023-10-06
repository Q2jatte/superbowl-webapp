import React, { useState, useEffect } from "react";
import axios from "axios";
import GamePresentationLine from "./GamePresentationLine";

function GamesList(props) {
  const [matchs, setMatchs] = useState([]);  

  useEffect(() => {    
    axios.get(`http://127.0.0.1:8000/api/games?filter=${props.filter}`)
      .then(response => {        
        setMatchs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.filter]);

  return (
    <div>
      <ul>
        {matchs.map((match, index) => (
          <li className="match-line" key={index}>
            <GamePresentationLine match={match}></GamePresentationLine>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GamesList;
