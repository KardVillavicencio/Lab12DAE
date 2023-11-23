// src/CharacterList.js

import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

class CharacterList extends Component {
  render() {
    const { characters } = this.props;

    return (
      <Container className="mt-4">
        <h2 className="mb-4">Personajes de Star Wars</h2>
        <Row>
          {characters && characters.length > 0 ? (
            characters.map((character, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
                <Card>
                  <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                      <strong>Género:</strong> {character.gender}<br />
                      <strong>Año de nacimiento:</strong> {character.birth_year}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No hay personajes disponibles.</p>
          )}
        </Row>
      </Container>
    );
  }
}

export default CharacterList;
