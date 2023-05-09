import React from "react";
import'./Horned-Beast.css'

class HornedBeast extends React.Component {

  render() {
    return (
      <article className="horned-beast">
        <h2>{this.props.title}</h2>
        <img src={this.props.src}
        alt={this.props.alt}
        title={this.props.title}
        ></img>
        <p>{this.props.alt}</p>
      </article>
      
    )
  }
};

export default HornedBeast;
