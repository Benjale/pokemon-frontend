import PokemonCounter from '../components/home/Counter'
import PokemonFilter from '../components/home/PokemonFilter'
import {Col, Row } from "react-bootstrap";

function Home() {

  return (
    <div className="py-4">
      <Row className="px-4">
        <Col>
          <div>
            <PokemonCounter entiyCounter ="pokemon" />
          </div>
        </Col>
        <Col>
          <div>
            <PokemonCounter entiyCounter ="location" />
          </div>
      </Col>
      </Row>
      <Row className="py-4 px-4">
        <Col xs={6}>
          <div>
            <PokemonFilter/>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
