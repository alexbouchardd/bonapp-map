import React, {PropTypes, Component} from 'react';
import Map from './map';
import ListView from './list_view';
import Nav from './nav';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      user_position: null
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({user_position: {lat:position.coords.latitude, lng: position.coords.longitude}});
        this._watchPositon();
      });

    }
  }

  render() {
    return (
      <div>
        <Nav/>
        <ListView
          droppoints={this.props.droppoints}
          onItemClick={this._handleItemClick.bind(this)}
          selected={this.state.selected}
          user_position={this.state.user_position}/>
        <Map
          droppoints={this.props.droppoints}
          onItemClick={this._handleItemClick.bind(this)}
          selected={this.state.selected}
          user_position={this.state.user_position}/>
      </div>
    );
  }

  _watchPositon() {
    const watchID = navigator.geolocation.watchPosition(position => {
      this.setState({user_position: {lat:position.coords.latitude, lng: position.coords.longitude}})
    });
  }

  _handleItemClick(droppoint) {
    this.setState({selected: droppoint});
  }
}
