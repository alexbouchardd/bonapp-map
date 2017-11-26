import React, { Component } from 'react';
import PropTypes from 'prop-types';

const svg = (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  	 viewBox="-1 -2 28 50" xmlSpace="preserve">
     <path id="XMLID_1_" className="st0" d="M23,30.2H2c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v26.2
    C25,29.3,24.1,30.2,23,30.2z"></path>
    <line id="XMLID_2_" className="st1" x1="5" y1="7.3" x2="5" y2="14"></line>
    <polygon id="XMLID_4_" className="st2" points="2.8,34.8 22.3,34.8 12.7,44.3 "></polygon>
  </svg>
)
export default class Marker extends Component {
  render() {
    return (
       <div className="marker" onClick={this.props.onClick}>
         {svg}
         {this._renderSelected()}
       </div>
    );
  }

  _renderSelected() {
    if(this.props.selected){
      return (<div className="markerSelected"></div>);
    }
  }
}
