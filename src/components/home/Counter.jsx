import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import getPokemonsByLetter from "../../requests/getPokemonsByLetter";
import getPokemonLocations from "../../requests/getPokemonLocations";

const PokemonCounter = (props) => {
  const { entiyCounter } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCountPokemons = async (event) => {
    event.preventDefault();
    if(searchTerm){
      try{
        const entiites = entiyCounter === 'pokemon' ? await getPokemonsByLetter(searchTerm) : await getPokemonLocations(searchTerm);
        if(!entiites){
          setResult(`No se han encontrado considencias con el texto ingresado`)
        }
        else{
          entiyCounter === 'pokemon' ? 
            setResult(`Hay ${entiites.quantity} pokemones que contienen "${searchTerm}" en su nombre`)
            :
            setResult(`Hay ${entiites.quantity} lugares en los que se puede encontrar ${searchTerm}`)
        }
      }
      catch (error) {
        console.log("Error:", error);
      }
    }
  };

  return (
    <Container className="py-4 bg-light rounded">
      <Row>
        <Col xs={12} className="px-4">
          <div className="text-center ml-3">
            {entiyCounter === 'pokemon' ?
              <h5>Cuenta los pokemones según lo escrito</h5>
              :
              <h5>Cuenta los lugares según el pokemón</h5>
              }
            <hr className="my-4" />
            <Form onSubmit={handleCountPokemons}>
              <Row className="align-items-center justify-content-center">
                <Col xs={5}>
                  <Form.Control
                    type="text"
                    placeholder= {entiyCounter === 'pokemon' ?"Ingrese una(s) letra(s)" : "Ingrese un pokemon"}
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col xs={3}>
                  <Button variant="success" type="submit" block>
                    Contar
                  </Button>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-center mt-3">
                <Col xs={8}>
                  {result !== null && (
                    <div className="text-center">
                      <hr className="my-1" />
                      <p>{result}</p>
                    </div>
                  )}
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PokemonCounter;
