import React from "react";
import Button from 'react-bootstrap/Button';
import './Horned-Beast.css'
import Card from "react-bootstrap/Card";
// import Typography from "react-bootstrap/Typography"

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
    // this.props.handleShowModal(this.props.name) 
  }

  render() {
    return (
      <>
        <Card className="horned-beast p-2 h-100%" style={{ width: '75%' }}
          onClick={() => {
            this.handleLikes();
            this.props.addHearts();
            this.props.handleShowModal(this.props.beast);
          }}
          >
          <Card.Img
            src={this.props.src}
            alt={this.props.alt}
            title={this.props.title}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>♥️{this.state.likes}likes</Card.Text>
            <Card.Text>{this.props.alt}</Card.Text>
            <Card.Text>{this.props.text}</Card.Text>
            <Card.Text>This Beast has {this.props.horns} horns!</Card.Text>

          </Card.Body>
        </Card >
      </>

    )
  }
} 

export default HornedBeast;
