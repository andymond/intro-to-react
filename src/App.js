import React, { Component } from 'react';
import './App.css';
import Deed from './Deed.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      deeds: [{ title: 'Pillage' }, {title: 'Burn down houses'}, {title: 'Get business blackout'}]
    }
  }

  addDeed = () => {
    this.state.deeds.push({ title: this.state.value })
    const newState = {
      deeds: this.state.deeds
    }

    this.setState(newState)
  }

  removeDeed = (event) => {
    this.state.deeds.pop({ title: 'random misdeed' })
    const newState = {
      deeds: this.state.deeds
    }

    this.setState(newState)
  }

  updateNewDeed = (event) => {
    const name = event.target.value
    const newState = {
      value: name
    }

    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <h1>Evil Deeds</h1>
        <input onChange={this.updateNewDeed} id="misdeedToAdd" placeholder="Name of Potential Misdeed"></input>
        <br/>
        <button value='value' onClick={this.addDeed}>Add Deed</button>
        <button onClick={this.removeDeed}>Remove Deed</button>
        { this.state.deeds.map(deed => {
          return <Deed title={deed.title} />
        }) }
      </div>
    );
  }
}
export default App;
