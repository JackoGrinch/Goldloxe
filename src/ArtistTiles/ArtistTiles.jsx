import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./ArtistTiles.css";
import ArtistTile from "./ArtistTile";
function ArtistTiles(props) {
  return (
    <div className="container">
      <Row className="justify-content-center">
        {props.Artists.map((artist, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={3}>
            <div className="cardBackground">
              <Card className="h-100 artistCard">
                <Card.Img variant="top" src={artist.img} />
                <Card.Body style={{ padding: "0px" }}>
                  <Card.Title>{artist.name}</Card.Title>
                  <Card.Text>{artist.bio}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ArtistTiles;
