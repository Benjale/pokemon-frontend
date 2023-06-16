import React, { useState, useEffect } from "react";
import { Button, Col, Container, Dropdown, Row, Card } from "react-bootstrap";
import getPokemonTypes from "../../requests/getPokemonTypes";
import getPokemonsByType from "../../requests/getPokemonsByType";

const PokemonFilter = () => {
  const [selectedType, setSelectedType] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemonTypes = async () => {
      try {
        const response = await getPokemonTypes();
        setPokemonTypes(response.types);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchPokemonTypes();
  }, []);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleSearch = async () => {
    if(selectedType){
      try {
        const response = await getPokemonsByType(selectedType);
        setFilteredPokemons(response.pokemons);
      } catch (error) {
        console.log("Error:", error);
      }
    };
  }

  return (
    <Container className="py-4 bg-light rounded">
        <Col xs={12}>
          <div className="text-center">
            <h5>Filtro de Pokemones por Tipo</h5>
            <hr className="my-4" />
          </div>
          <Row className="align-items-center justify-content-center">
            <Col xs={4}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-types"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#007bff",
                    color: "#007bff"
                  }}
                >
                  {selectedType ? selectedType : "Seleccione un tipo"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {pokemonTypes.map((type) => (
                    <Dropdown.Item
                      key={type}
                      onClick={() => handleTypeSelect(type)}
                    >
                      {type}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={2}>
              <Button variant="success" onClick={handleSearch} block>
                Buscar
              </Button>
            </Col>
          </Row>
        </Col>
        <Row className="py-4 px-4"> 
          <Col xs={12}>
            <div className="text-center">
              <hr className="my-1" />
              {filteredPokemons.length > 0 ? (
                <Row xs={1} md={2} xl={3} className="mt-3 g-4">
                {filteredPokemons.map((pokemon) => (
                  <Col key={pokemon}>
                    <Card className="mb-3">
                      <Card.Body>
                        <Card.Title>{pokemon}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
                </Row>
              ) : (
                <p>No se encontraron Pokemones.</p>
              )}
            </div>
          </Col>
        </Row>
    </Container>
  );
};

export default PokemonFilter;
