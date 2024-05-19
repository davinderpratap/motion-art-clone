import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div id="main" className="row">
        <div className="col-md-3" style={{ paddingLeft: "20px" }}>
          <p className="gradient">
            Transform
            <br className="break" /> Your Website
          </p>
          <p>
            With Motion Art
            <br className="break" /> Effect
          </p>
        </div>
        <div className="col-md-6">
          <h1>Attract Your Visitors Attention With Colorful</h1>
          <h1 className="gradient">Motion Art Effect</h1>
          <p
            style={{ color: "#b4aec4", paddingTop: "30px", lineHeight: "30px" }}
          >
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </div>
    );
  }
}
