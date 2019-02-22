import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {

  state = {
    track_list: [
      { track: { track_name: 'abc'} },
      { track: { track_name: '123'} }
    ],
    heading: 'Top 10 Tracks'
  };

  // React lifecycle - Waits for component to be mounted
  // https://cors-anywhere.herokuapp.com/ is a way to solve an access error
  componentDidMount() {
    axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    )
  }
}

export const Consumer = Context.Consumer;
