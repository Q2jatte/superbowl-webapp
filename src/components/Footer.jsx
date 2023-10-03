import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-3 border-top">
      <Container>
        <hr />
        <Row>
          <Col lg="1" className="text-center mb-3">
            <img src="./src/assets/logo.svg" className="mini-logo mx-auto" />
          </Col>
          <Col lg="8">
            <p className="text">
              © 2024 - Ce site constitue une étude de cas réalisée dans le cadre
              d'une formation de développeur web. Les logos et les éléments
              visuels présentés sont exclusivement utilisés à des fins
              d'illustration et ne représentent en aucune manière des
              informations réelles. Aucune forme de pari ou d'échange d'argent
              n'est autorisée sur ce site. Pour toute demande d'information,
              veuillez contacter le créateur de ce site.
            </p>
          </Col>
          <Col lg="1" className="text-center mb-3">
            <img
              src="./src/assets/Facebook.png"
              alt="facebook logo"
              className="rounded-circle mini-logo bg-white"
            />
          </Col>
          <Col lg="1" className="text-center mb-3">
            <img
              src="./src/assets/Instagram.png"
              alt="insta logo"
              className="rounded-circle mini-logo bg-white"
            />
          </Col>
          <Col lg="1" className="text-center mb-3">
            <img
              src="./src/assets/X.png"
              alt="X logo"
              className="rounded-circle mini-logo bg-white"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
