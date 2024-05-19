import React, { Component } from "react";
import RatingCard from "./RatingCard";
import leaf from "../imgs/leaf.png";
import g2 from "../imgs/g2.png";
import wp from "../imgs/wordpress.png";

export default class Ratings extends Component {
  render() {
    return (
      <div
        id="ratings"
        className="d-flex"
        style={{
          marginTop: "100px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Trusted by thousands of users around the world</p>
        <div
          className="d-flex"
          style={{
            justifyContent: "space-between",
            width: "100%",
            margin: "40px 0",
          }}
        >
          <RatingCard img={leaf} />
          <RatingCard img={g2} />
          <RatingCard img={wp} />
        </div>
      </div>
    );
  }
}
