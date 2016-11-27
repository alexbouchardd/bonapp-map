import React, {PropTypes, Component} from 'react';

import Distance from "../lib/distance";

const footerLinks = [
  {
    translation_key: "!nav.network",
    url: ""
  },{
    translation_key: "!nav.about",
    url: ""
  },{
    translation_key: "!nav.contact",
    url: ""
  },{
    translation_key: "!nav.receipes",
    url: ""
  },{
    translation_key: "!nav.blog",
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
            <a>{this.context.translator.t("!list.description")}</a>
          </div>
          {this.props.droppoints.map((droppoint, index) => {
            // if(this.props.user_position){
            //   console.log(Distance(droppoint.place.lat, droppoint.place.long, this.props.user_position.lat, this.props.user_position.lng, "K"));
            // }
            return this._renderItem(droppoint);
          }
          )}
        </div>
        {this._renderFooter()}
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

  _renderFooter() {
    return(
      <div className="footer">
        {footerLinks.map((link, index) => {
          return (
            <a href={link.url} key={index}>{this.context.translator.t(link.translation_key)}</a>
          );
        })}
      </div>
    )
  }
}

ListView.contextTypes = {
  translator: PropTypes.object.isRequired
}
