import React from "react";
import stars from "../imgs/stars.png";

const RatingCard = ({ img }) => {
  return (
    <div className="col-sm-4 d-flex">
      <span>
        <img src={img} alt="img" />
      </span>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "15px",
          placeSelf: "center",
          alignItems: "stretch",
        }}
      >
        <span>
          <img src={stars} alt="stars" />
        </span>
        <span style={{ paddingTop: "15px" }}>4.5 Score, 9 Reviews</span>
      </span>
    </div>
  );
};

export default RatingCard;
