import React, {PropTypes, Component} from 'react';

const svg = (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  	 viewBox="0 0 668 196.9" xmlSpace="preserve">
    <g id="XMLID_2_">
    	<path id="XMLID_20_" d="M89.1,104.7h-5.6v7.5h5.6c2.6,0,5-1.2,5-3.8C94.1,105.8,92,104.7,89.1,104.7z"/>
    	<path id="XMLID_19_" d="M89.1,84.7h-5.6v7.5h5.6c2.6,0,5-1.2,5-3.8C94.1,85.9,92,84.7,89.1,84.7z"/>
    	<path id="XMLID_18_" d="M165.5,87.4c-7.2,0-11.1,5.1-11.1,11.2c0,6.1,4,11.5,11.1,11.5c7.2,0,11.3-5.6,11.3-11.5
    		C176.9,92.5,172.7,87.4,165.5,87.4z"/>
    	<path id="XMLID_15_" d="M482.7,124.6h15.9c0.5,0,1.7-0.6,1.7-1.2v-13.7h5.4c10.2,0,22-5.4,22-18.2s-11.7-19.2-22-19.2h-23.1
    		c-0.5,0,0.2,1.5,0.2,2.1v49.1C483,124,482.2,124.6,482.7,124.6z M500.4,87.2h4.4c2.6,0,5.1,1.9,5.1,5c0,3.1-2.6,5-5.1,5h-4.4V87.2z
    		"/>
    	<path id="XMLID_12_" d="M399.5,124.6h17.6c0.5,0,1.1-0.3,1.3-0.8l2-6.1c0.2-0.5,0.8-0.6,1.3-0.6h13.7c0.5,0,1.1,0.1,1.3,0.6
    		l2.2,5.8c0.2,0.5,0.8,1,1.4,1h17.6c0.6,0,0.9-0.5,0.7-1l-18.3-49.8c-0.2-0.5-0.8-1.5-1.4-1.5h-21.4c-0.6,0-1.2,1-1.4,1.5
    		l-17.4,49.8C398.7,124.1,399,124.6,399.5,124.6z M428.6,90.6l4.8,14.1h-9.2L428.6,90.6z"/>
    	<path id="XMLID_6_" d="M661.8,0H335.2c-0.9,0-1.7,0.2-2.5,0.5C332,0.2,331.1,0,330.3,0H6.2C2.8,0,0,2.8,0,6.2v184.4
    		c0,3.4,2.8,6.2,6.2,6.2h324c0.9,0,1.7-0.2,2.5-0.5c0.8,0.3,1.6,0.5,2.5,0.5h326.5c3.4,0,6.2-2.8,6.2-6.2V6.2
    		C668,2.8,665.2,0,661.8,0z M90.1,124.6h-23c-0.5,0-1-0.9-1-1.5V74.1c0-0.5,0.5-1.8,1-1.8h23c12.8,0,20.8,4,20.8,13.2
    		c0,10.2-7.5,11.6-7.5,11.6v1c0,0,9.6,1.8,9.6,12C113.1,122.9,102.8,124.6,90.1,124.6z M165.5,125.7c-16.4,0-28.7-11.8-28.7-27.1
    		S149.2,72,165.5,72s28.7,11.2,28.7,26.6S181.9,125.7,165.5,125.7z M270.4,123.1c0,0.6-1.6,1.5-2.2,1.5H253c-0.5,0-0.9-0.3-1.5-1.1
    		l-16-24.2v23.8c0,0.6-0.9,1.5-1.4,1.5h-13.5c-0.6,0-0.1-0.9-0.1-1.5V74.1c0-0.5-0.5-1.8,0.1-1.8h17.1c0.8,0,1,0.8,1.3,1.2L253,93.4
    		V74.1c0-0.5,1.1-1.8,1.6-1.8h13.6c0.6,0,2.2,1.3,2.2,1.8V123.1z M655.5,184.4H341.5v-172h314.1V184.4z"/>
    	<path id="XMLID_3_" d="M552.7,123.4c0,0.6-0.1,1.2,0.4,1.2h15.9c0.5,0,1.1-0.6,1.1-1.2v-13.7h6c10.2,0,22-5.4,22-18.2
    		s-11.8-19.2-22-19.2h-23.1c-0.5,0-0.4,1.5-0.4,2.1V123.4z M570.2,87.2h5c2.6,0,5.1,1.9,5.1,5c0,3.1-2.6,5-5.1,5h-5V87.2z"/>
    </g>
  </svg>
);

const menu_svg = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
);

const map_svg = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
);

const contextTypes = {
  translator: PropTypes.object.isRequired
}

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const nav_svg = this.props.drawer_is_visible ? map_svg : menu_svg;
    return (
      <div className='nav'>
        <div className='logo'>{svg}</div>
        <div className='lang'>
          <a href={"/en"} className={this.context.translator.lang == "en" ? "langSelected" : null}>EN</a>
          <a href={"/fr"} className={this.context.translator.lang == "fr" ? "langSelected" : null}>FR</a>
        </div>
        <div className='burger' onClick={this.props.toggleDrawer}>
          {nav_svg}
        </div>
      </div>
    );
  }
}

Nav.contextTypes = contextTypes;
