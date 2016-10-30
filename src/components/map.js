import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';

export default class Map extends Component {
  render() {
    return (
      <div id='mapContainer'>
         <GoogleMap
          bootstrapURLKeys={{
            key: 'AIzaSyCPMq-OZb3CNvLyibyJAyWnikjyFQWvN8w',
            language: 'en'
          }}
          defaultCenter={{lat: 59.938043, lng: 30.337157}}
          defaultZoom={9}>
        </GoogleMap>
      </div>
    );
  }
}
