import React from "react";
import HornedBeast from "./horned-beast";
import inputData from './data.json'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBeast: inputData,
      rawData: inputData,
    }
  }
  filter = (event) => {
    let numberOfHorns = parseInt(event.target.value)
    let allBeasts = this.state.rawData;
    if (numberOfHorns) {
      allBeasts = this.state.rawData.filter(beast => beast.horns === numberOfHorns)
    }
    this.setState({
      filteredBeast: allBeasts,
    })
  }
  handleSelectChange = (event) => {
    let selected = event.target.value;
    this.setState({
      howToFilter: selected
    });
  }
    render() {

      let beasts = this.state.filteredBeast.map((beast, idx) => {

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
          <Form>
            <Form.Label>Select Number of Horns</Form.Label>
            <Form.Control as="select" onChange={this.filter}>
              <option value="">All</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="100">100 Horns</option>
            </Form.Control>
          </Form>
          <Row xs={1} sm={2} md={3} lg={4}>
            {beasts}
          </Row>

        </main >
      );

    }
  }


export default Main;
