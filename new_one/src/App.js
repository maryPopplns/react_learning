import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: '',
    };
  }

  async componentDidMount() {
    const RESPONSE = await fetch('http://i.imgflip.com/1bij.jpg');
    const JSON = await RESPONSE.json();
    console.log(JSON);
  }

  render() {
    return <h1>{this.state.randomImage}</h1>;
  }
}

export default App;
