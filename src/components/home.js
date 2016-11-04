import React, {PropTypes, Component} from 'react';
import Map from './map';
import ListView from './list_view';
import Nav from './nav';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  render() {
    return (
      <div>
        <Nav/>
        <ListView
          droppoints={this.props.droppoints}
          onItemClick={this._handleItemClick.bind(this)}
          selected={this.state.selected}/>
        <Map
          droppoints={this.props.droppoints}
          onItemClick={this._handleItemClick.bind(this)}
          selected={this.state.selected}/>
      </div>
    );
  }

  _handleItemClick(droppoint) {
    this.setState({selected: droppoint});
  }
}
