import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom';
/**
 * ComponentName
 */
class Lyrics extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    track: {},
    lyrics: {}
  }

  componentDidMount() {
    axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
      .then(res => {
        //console.log(res.data);
        this.setState({lyrics: res.data.message.body.lyrics})

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
      })
      .then(res => {
        //console.log(res.data);
        this.setState({track: res.data.message.body.track})
      })
      .catch(err => console.log(err));
  }


  render() {
    const { track, lyrics } = this.state;
    if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
      return <Spinner />
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4"></Link>
        </React.Fragment>
      )
    };
  }
}



export default Lyrics;
