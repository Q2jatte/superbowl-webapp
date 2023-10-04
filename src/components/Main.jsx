import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import GamesList from './GamesList';

function Main() {
  return (
    <main>
    <Container className="mt-3">
      <Row>
        <Col lg="6" className="mb-3">
          <article className="rounded bg-white shadow pb-1">
            <img
              src="./src/assets/article-img.png"
              className="img-fluid rounded-top"
              alt="Image Super Bowl"
            />
            <p className="mx-3">
              🏈 Préparez-vous pour le Super Bowl LVIII ! Pariez avec nous et
              vivez chaque instant du match avec une excitation accrue. Profitez
              des meilleures cotes, des options de paris variées, et des bonus
              exclusifs. Rejoignez-nous maintenant pour gagner gros ! 🎉💰
            </p>
            <Button variant="danger" size="lg" className="btn-bet mx-auto d-block mb-3">Parier</Button>{" "}
          </article>
        </Col>
        <Col lg="6" className="mb-3">
          <div className="rounded bg-white shadow pb-3 h-100">
            <h2 className="mx-auto text-uppercase text-center">Prochains matchs</h2>
            <nav>
              <ul>
                <GamesList filter="future"></GamesList>
              </ul>
            </nav>
          </div>
        </Col>
      </Row>
    </Container>
    </main>
  );
}

export default Main;
