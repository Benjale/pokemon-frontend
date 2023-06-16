import PokemonCounterByLetter from '../components/home/Counter'
import {Col, Row } from "react-bootstrap";

function Home() {

  return (
    <div className="py-4">
      <Row className="px-4">
        <Col>
          <div>
            <PokemonCounterByLetter entiyCounter ="pokemon" />
          </div>
        </Col>
        <Col>
          <div>
            <PokemonCounterByLetter entiyCounter ="location" />
          </div>
      </Col>
      </Row>
    </div>
  );
}

export default Home;
