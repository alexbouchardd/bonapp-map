import React, {PropTypes, Component} from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="listContainer">
        <div className="listInfo">
          <h1>Droppoints</h1>
          <a>How does it work?</a>
        </div>
        <div className="listView">
          {this.props.droppoints.map((droppoint, index) =>
            this._renderItem(droppoint)
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
        <h1>{droppoint.en.name}</h1>
        <p className="details">{droppoint.en.address_short}</p>
        <p>{droppoint.en.description}</p>
      </div>
    );
  }

  _renderFooter() {
    return(
      <div className="footer">
        Test
      </div>
    )
  }
}
