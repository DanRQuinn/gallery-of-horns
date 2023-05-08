import React from "react";
import HornedBeast from './horned-beast'

class HornedBeast extends React.Component {

  render() {
    return (
      <article>
        <h3>{this.props.name}</h3>
        <p>content</p>
      </article>
      
    )
  }
};

export default HornedBeast;
