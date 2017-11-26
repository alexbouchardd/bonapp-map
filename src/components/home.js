import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Map from './map';
import ListView from './list_view';
import Nav from './nav';

const childContextTypes = {
  translator: PropTypes.object.isRequired
}

const propTypes = {
  droppoints: PropTypes.array.isRequired,
  translator: PropTypes.object.isRequired
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      user_position: null,
      drawer_is_visible: true
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
      amplitude.getInstance().logEvent('location_available');
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({user_position: {lat:position.coords.latitude, lng: position.coords.longitude}});

        // All tracking is concurrently anonymous, BonApp will not track position of identified data without consentment.
        amplitude.getInstance().logEvent('accepted_location_request', {
          'lat': position.coords.latitude,
          'lng': position.coords.longitude
        });

        this._watchPositon();
      });
    }
  }

  render() {
    const drawer_state = this.state.drawer_is_visible ? "drawer-open" : "drawer-close";
    return (
      <div>
        <div className={"drawer " + drawer_state}>
          <Nav
            toggleDrawer={this._toggleDrawer.bind(this)}
            drawer_is_visible={this.state.drawer_is_visible}/>
          <ListView
            droppoints={this.props.droppoints}
            onItemClick={this._handleItemClick.bind(this)}
            selected={this.state.selected}
            user_position={this.state.user_position}/>
        </div>
        <Map
          toggleDrawer={this._toggleDrawer.bind(this)}
          drawer_is_visible={this.state.drawer_is_visible}
          droppoints={this.props.droppoints}
          onItemClick={this._handleItemClick.bind(this)}
          selected={this.state.selected}
          user_position={this.state.user_position}/>
      </div>
    );
  }

  _watchPositon() {
    const watchID = navigator.geolocation.watchPosition(position => {
      // All tracking is concurrently anonymous, BonApp will not track position of identified data without consentment.
      amplitude.getInstance().logEvent('changed_position', {
        'lat': position.coords.latitude,
        'lng': position.coords.longitude
      });
      this.setState({user_position: {lat:position.coords.latitude, lng: position.coords.longitude}})
    });
  }

  _toggleDrawer() {
    this.setState({drawer_is_visible: !this.state.drawer_is_visible});
  }

  _handleItemClick(droppoint) {
    amplitude.getInstance().logEvent('selected_droppoint', {
      'droppoint_id': droppoint.id,
      'droppoint_place': droppoint.place_id
    });
    this.setState({selected: droppoint});
  }
}

Home.propTypes = propTypes;
Home.childContextTypes = childContextTypes;
