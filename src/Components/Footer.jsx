import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div
        className="container d-flex"
        style={{ justifyContent: "space-between" }}
      >
        <small>© 2023 Copywrite. All rights reserved by QodeMatrix</small>
        <span>
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "30px",
            }}
          >
            <small>Documentation</small>
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            <small>Support</small>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
