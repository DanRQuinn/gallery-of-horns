import React from "react";
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import './App.css';
import data from './data.json';
import SelectedBeast from './Selected-Beast.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      isModalDisplaying: false,
      beastName: 'test',
      selectedBeast: {}
    }
  }
  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + '💜'
    });
  }
  handleShowModal = (selectedBeast) => {
    this.setState({
      isModalDisplaying: true,
      selectedBeast: selectedBeast
    });
    console.log('model was clicked');

  }
  handleCloseModal = () => {
    this.setState({
      isModalDisplaying: false
    })
  }

  render() {
    return (
      <>
        <Header
          hearts={this.state.hearts}
        />
        <Main
          addHearts={this.addHearts} 
          data={data}
          handleShowModal={this.handleShowModal}
          />
        <Footer />
        <SelectedBeast
          show={this.state.isModalDisplaying}
          onHide={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
        />
      </>
    )
  }
};

export default App;


