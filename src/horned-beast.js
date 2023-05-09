import React from "react";
import Button from 'react-bootstrap/Button';
import './Horned-Beast.css'
import { Card } from "react-bootstrap";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  render() {
    return (
      <Card className="horned-beast" style={{ width: '75%' }}>
        <Card.Img
          onClick={this.handleLikes}
          src={this.props.src}
          alt={this.props.alt}
          title={this.props.title}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
          <p>♥️{this.state.likes}likes</p>
          <p>{this.props.alt}</p>
          <p>{this.props.text}</p>
          <p>This Beast has {this.props.horns} horns!</p>
          {/* <Button>BootStrap Button</Button>
          <button>Html Button</button> */}
          </Card.Text>
        </Card.Body>
      </Card >

    )
  }
}

export default HornedBeast;
