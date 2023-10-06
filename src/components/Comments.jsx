import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";
import commentateur from '../assets/commentateur.png';

function Comments({ idGame }) {
  const [data, setData] = useState(null); // weather data state
  const [isLoading, setIsLoading] = useState(false); // loading data state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/comments/${idGame}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  function getTime(dateString) {
    const dateObject = new Date(dateString);
    const hours = dateObject.getHours(); // Récupérer les heures
    const minutes = dateObject.getMinutes(); // Récupérer les minutes
    return `${hours}:${minutes}`;
  }

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0">
        ⏺ Direct
      </Card.Header>
      <Card.Body>
        {!isLoading &&
          data &&
          data.map((comment, index) => (
            <Row key={index}>
              <Col lg="1" sm="2" className="text-center">
                <img src={commentateur} alt="avatar commentateur" className="rounded-circle avatar-circle shadow"/>
                <p>🕙{getTime(comment.postedAt)}</p>
              </Col>
              <Col lg="11" sm="10" className="rounded chat mb-1">{comment.message}</Col>
            </Row>
          ))}
      </Card.Body>
    </Card>
  );
}

export default Comments;
