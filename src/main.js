import React from "react";
import HornedBeast from "./horned-beast";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {

  render() {

    let beasts = this.props.data.map((beast, idx) => {

      return (<Col key={idx} className="mt-4">


        <HornedBeast
          src={beast.image_url}
          title={beast.title}
          alt={beast.alt}
          text={beast.description}
          horns={beast.horns}
          key={beast._id}
          addHearts={this.props.addHearts}
          handleShowModal={this.props.handleShowModal}
          beast={beast}
        />
      </Col>)
    });

    return (
      <main>
        <Row xs={1} sm={2} md={3} lg={4}>
          {beasts}
        </Row>
      </main >
    );

  }
}


export default Main;


