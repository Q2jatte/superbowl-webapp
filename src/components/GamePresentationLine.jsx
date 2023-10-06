import { Col, Row } from "react-bootstrap";
import GameDateTime from "./GameDateTime";

function GamePresentationLine({match}) {
  
  return (
    <a href={`/game/${match.id}`}>
      <Row>
        <Col className="text-highlight text-align-center d-flex flex-column align-items-center justify-content-center">
          <img src={match.idTeam1.logo} className="mini-logo-team" />
          {match.idTeam1.shortName}
        </Col>

        <Col className="text-highlight d-flex flex-column align-items-center justify-content-center">
          <GameDateTime
            dateString={match.startDateTime}
            started={match.started}
          ></GameDateTime>
        </Col>

        <Col className="text-highlight d-flex flex-column align-items-center justify-content-center">
          <img src={match.idTeam2.logo} className="mini-logo-team" />
          {match.idTeam2.shortName}
        </Col>
      </Row>
    </a>
  );
}

export default GamePresentationLine;
