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

  getChildContext() {
    return {translator: this.props.translator};
  }

  componentDidMount() {
    amplitude.getInstance().logEvent('home_pageview', {
      'lang': this.props.translator.lang
    });
    if ("geolocation" in navigator) {
      amplitude.getInstance().logEvent('shown_location_request');
      navigator.geolocation.getCurrentPosition(position => {
        amplitude.getInstance().logEvent('accepted_location_request');
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
      amplitude.getInstance().logEvent('changed_position');
      this.setState({user_position: {lat:position.coords.latitude, lng: position.coords.longitude}})
    });
  }

  _handleItemClick(droppoint) {
    amplitude.getInstance().logEvent('selected_droppoint', {
      'droppoint_id': droppoint.id,
      'droppoint_place': droppoint.place_id
    });
    this.setState({selected: droppoint});
  }
}

Home.propTypes = {
  droppoints: PropTypes.array.isRequired,
  translator: PropTypes.object.isRequired
}

Home.childContextTypes = {
  translator: PropTypes.object.isRequired
}
