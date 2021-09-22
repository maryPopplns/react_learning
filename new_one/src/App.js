import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  async componentDidMount() {
    const RESPONSE = await fetch('https://api.imgflip.com/get_memes');
    const RESOLVED = await RESPONSE.json();
    const MEMES = RESOLVED.data.memes;
    this.setState({ allMemeImgs: MEMES });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  clickHandler(event) {
    event.preventDefault();
    const RANDOM_NUMBER = Math.floor(Math.random() * 100);
    const NEW_IMAGE = this.state.allMemeImgs[RANDOM_NUMBER];
    this.setState({ randomImage: NEW_IMAGE });
  }

  render() {
    return (
      <div>
        <form className='meme-form'>
          <input
            name='topText'
            type='text'
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            name='bottomText'
            type='text'
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button onClick={this.clickHandler}>Gen</button>
        </form>
        <div className='meme'>
          <img src={this.state.randomImage} alt='' />
          <h2 className='top'>{this.state.topText}</h2>
          <h2 className='bottom'>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

/**
 * Create a method that, when the "Gen" button is clicked, chooses one of the
 * memes from our `allMemeImgs` array at random and makes it so that is the
 * meme image that shows up in the bottom portion of our meme generator site
 */

export default App;
