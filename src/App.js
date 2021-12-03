import React from 'react';
import $ from 'jquery'
import pads from './pads.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      button: '',
      loop: []
    }
    this.play = this.play.bind(this)
    // this.loop = this.loop.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    let letter = e.key.toUpperCase()
    if (letter === 'Q' || 'W' || 'E' || 'A' || 'S' || 'D' || 'Z' || 'X' || 'C') {
      $('#' + letter + '-button').trigger('click')
    }
  }

  play(e) {
    let button = e.target.innerText
    let audio = document.getElementById(button)
    this.setState({
      button: button
    })
    audio.volume = 1
    audio.paused ? audio.play() : audio.currentTime = 0
  }

  /* LOOP FUNCTION FOR LOOP PADS IN DRUM MACHINE
  loop(e) {
    let loop = e.target.innerText
    let audio = document.getElementById(loop)
    audio.volume = 0.4
    if (audio.loop) {
      this.setState({
        loop: this.state.loop.filter(i => i !== loop)
      })
      audio.loop = false
      audio.load()
      audio.currentTime = 0
    } else {
      this.setState({
        loop: [...this.state.loop, loop]
      })
      audio.loop = true
      audio.load()
      audio.play()
    }
  }
  */


  render() {
    return (
      <div className="container">
        <div className="titleContainer">
          <h1 className="title">drum machine</h1>
        </div>
        <div id="drum-machine">
          <div id="display">
            <div className="button-name">
              { this.state.button }
            </div>
            <div className="loop-name">
              { this.state.loop }
            </div>
          </div>
          <div className="buttonContainer">
            <div className="buttonSet">
              {pads.map(i => {
                return <button onClick={this.play} id={i.letter + '-button'} key={i.letter} className="drum-pad">{i.letter}<audio src={i.source} id={i.letter} className="clip" /></button>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
