import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import GamePresentationLine from "./GamePresentationLine";
import BetButton from "./BetButton";
import Odds from "./Odds";
import Players from "./Players";
import Comments from "./Comments";
import Meteo from "./Meteo";

function GameDetails({ id }) {
  const [data, setData] = useState(null); // état de match
  const [error, setError] = useState(null); // état pour gérer les erreurs
  const [isLoading, setIsLoading] = useState(false); // état du chargement des data

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/game/${id}`)
      .then((response) => {
        setData(response.data[0]);
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
      {isLoading && !error && <p>Loading...</p>}
      {data && (
        <Container>
          <Row className="mt-3">
            <Col md="3" xs="6">
              <BetButton />
            </Col>
            <Col md="3" xs="6">
              <div className="w-100 h-100 rounded bg-white shadow text-center">
                <Odds
                  team1={data.idTeam1.shortName}
                  team2={data.idTeam2.shortName}
                  odds1={data.oddsTeam1}
                  odds2={data.oddsTeam2}
                  oddsN={data.oddsEquality}
                ></Odds>
              </div>
            </Col>
            <Col md="3" xs="6">
              <div className="w-100 h-100 rounded bg-white shadow text-center">
                <Row>
                  <Col>🏟 {data.idStadium.name}</Col>
                </Row>
                <Row>
                  <Col>
                    <Meteo coordinates={data.idStadium.coordinate} />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md="3" xs="6">
              <div className="w-100 h-100 rounded bg-white shadow text-center">
                A venir
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <div className="w-100 h-100 rounded bg-white shadow text-center">
                <GamePresentationLine match={data} />
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md="6" xs="12">
              <Players idTeam={data.idTeam1.id} teamName={data.idTeam1.name} />
            </Col>
            <Col md="6" xs="12">
              <Players idTeam={data.idTeam2.id} teamName={data.idTeam2.name} />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Comments idGame={data.id}/>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default GameDetails;
