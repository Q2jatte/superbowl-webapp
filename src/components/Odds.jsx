import { Col, Row } from "react-bootstrap";

function Odds(props) {
  return (
    <>
      <Row>
        <Col>{props.team1}</Col>
        <Col>N</Col>
        <Col>{props.team2}</Col>
      </Row>
      <Row>
        <Col>{props.odds1}</Col>
        <Col>{props.oddsN}</Col>
        <Col>{props.odds2}</Col>
      </Row>
    </>
  );
}

export default Odds;
