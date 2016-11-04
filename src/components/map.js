import React, {PropTypes, Component} from 'react';

import GoogleMap from 'google-map-react';
import Marker from './marker';

export default class Map extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const center = this.props.selected ? [this.props.selected.place.lat, this.props.selected.place.long] : [45.5017, -73.5673];
    return (
      <div id='mapContainer'>
         <GoogleMap
          bootstrapURLKeys={{
            key: 'AIzaSyCPMq-OZb3CNvLyibyJAyWnikjyFQWvN8w',
            language: 'en'
          }}
          center={center}
          defaultZoom={13}>
          {this.props.droppoints.map((droppoint, index) =>
            <Marker key={index} lat={droppoint.place.lat} lng={droppoint.place.long} text={index} onClick={() => this._handleMarkerClicked(droppoint)}/>
          )}
        </GoogleMap>
      </div>
    );
  }

  _handleMarkerClicked(droppoint) {
    this.props.onItemClick(droppoint);
  }
}
