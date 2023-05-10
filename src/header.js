import React from "react";

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>Gallery of Horns</h1>
        <p id='hearst'>{this.props.hearts}</p>
      </header>
    )
  }
};

export default Header;
