import React, { useState, useEffect } from "react";
import axios from "axios";
import { Accordion, Badge } from "react-bootstrap";

function Players({ idTeam, teamName }) {
  const [data, setData] = useState([]); // players data
  const [error, setError] = useState(null); // error state
  const [isLoading, setIsLoading] = useState(false); // loading state

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/players/${idTeam}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.response.data.message);
        setError(error.response.data.message);
      });
  }, []);

  return (
    <>
      {error && <p className="text-danger text-center">⚠️ {error} ⚠️</p>}
      {isLoading && !error && <p>Players are coming...</p>}
      {data && (
        <Accordion>
          <Accordion.Item eventKey="0" className="shadow">
            <Accordion.Header><Badge pill bg="warning" className="me-1">{data.length}</Badge>Joueurs de {teamName}</Accordion.Header>
            <Accordion.Body>
              <ul>
                {data.map((player, index) => (
                  <li key={index}>
                    <p>{player.name}</p>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </>
  );
}

export default Players;
