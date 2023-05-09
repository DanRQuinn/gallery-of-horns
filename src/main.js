import React from "react";
import HornedBeast from "./horned-beast";
import beasts from './beasts.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {

  render() {
    let beastsArr = [];
    beasts.forEach((beast, idx) => {
      beastsArr.push(
        <Col md={4} key={idx}>


          <HornedBeast
            src={beast.image_url}
            title={beast.title}
            alt={beast.alt}
            text={beast.description}
            horns={beast.horns}
            key={idx}
          />
        </Col>
      )

    });
    return (
      <main>
        <Row>
          {beastsArr}
        </Row>
      </main>
    );
  };
};

export default Main;


