import React, { Component } from "react";

class Map extends Component {
  constructor(props) {
    super(props);

    this.map = React.createRef();
    console.log("constructor", this.map);
  }
  componentDidMount() {
    console.log("componentDidMount", this.map);

    new google.maps.Map(this.map.current, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    console.log("render", this.map);

    return this.map ? <div className="google-map" ref={this.map} /> : null;
  }
}

export default Map;
