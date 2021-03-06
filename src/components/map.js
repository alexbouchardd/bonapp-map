import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoogleMap from 'google-map-react';
import Marker from './marker';
import UserMarker from './user_marker';

export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const center = this.props.selected ? [this.props.selected.place.lat, this.props.selected.place.lng] : [45.5017, -73.5673];
    return (
      <div id='mapContainer'>
         <GoogleMap
          bootstrapURLKeys={{
            key: 'AIzaSyCPMq-OZb3CNvLyibyJAyWnikjyFQWvN8w',
            language: 'en',
          }}
          options={{
            fullscreenControl: false
          }}
          center={center}
          defaultZoom={12}
          >
          {this.props.droppoints.map((droppoint, index) =>
            <Marker
              key={index}
              selected={this.props.selected ? this.props.selected.id === droppoint.id : null}
              lat={droppoint.place.lat}
              lng={droppoint.place.lng}
              onClick={() => this._handleMarkerClicked(droppoint)}/>
          )}
          {this._renderUserPosition()}
        </GoogleMap>
      </div>
    );
  }

  _renderUserPosition() {
    if(!this.props.user_position) {
      return false;
    }
    return (
      <UserMarker
        lat={this.props.user_position.lat}
        lng={this.props.user_position.lng}/>
    );
  }

  _handleMarkerClicked(droppoint) {
    amplitude.getInstance().logEvent('clicked_droppoint_marker', {
      'droppoint_id': droppoint.id,
      'droppoint_place': droppoint.place_id
    });
    this.props.onItemClick(droppoint);
  }
}
