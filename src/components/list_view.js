import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Distance from "../utils/distance";

const footerLinks = [
  {
    translation_key: "!nav.community",
    url: ""
  },{
    translation_key: "!nav.manifesto",
    url: ""
  },{
    translation_key: "!nav.fridges",
    url: ""
  },{
    translation_key: "!nav.foodwaste",
    url: ""
  },{
    translation_key: "!nav.recipes",
    url: ""
  }
]

export default class ListView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="listContainer">
        <div className="listView">
          <div className="listInfo">
            <h1>{this.context.translator.t("!list.title")}</h1>
            <p>{this.context.translator.t("!list.description")}</p>
            <a href="https://bonapp.ca" target="_blank">{this.context.translator.t("!list.link")}</a>
          </div>
          {this.props.droppoints.map((droppoint, index) => {
            // if(this.props.user_position){
            //   console.log(Distance(droppoint.place.lat, droppoint.place.long, this.props.user_position.lat, this.props.user_position.lng, "K"));
            // }
            return this._renderItem(droppoint);
          }
          )}
        </div>
      </div>
    );
  }

  _renderItem(droppoint) {
    const selectedClass = this.props.selected && (this.props.selected.id === droppoint.id) ? 'selectedItem ' : "";
    return(
      <div key={droppoint.id} className={selectedClass + "listItem"} onClick={() => this.props.onItemClick(droppoint)}>
        <div className="listItemInfo">
          <h3 href={droppoint.link} target="_blank">{droppoint[this.context.translator.lang].name}</h3>
          <p className="details">{droppoint[this.context.translator.lang].address_short}</p>
          <p>{droppoint[this.context.translator.lang].description}</p>
        </div>
        {this._renderItemFooter(droppoint)}
      </div>
    );
  }

  _renderItemFooter(droppoint){
    if(!this.props.selected || !(this.props.selected.id === droppoint.id)){
      return null;
    }
    return (
      <div>
        <a href={`https://www.google.ca/maps/place/${droppoint[this.context.translator.lang].address}`} target="_blank">Directions</a>
        <a href={droppoint.link} target="_blank">Website</a>
      </div>
    );
  }

}

ListView.contextTypes = {
  translator: PropTypes.object.isRequired
}
