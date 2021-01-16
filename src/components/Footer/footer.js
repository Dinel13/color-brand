import React from "react";
import LinkSosmed from "../linkSosmed";
import "./footer.css"

const footer = () => (
  <div className="footer">
    <div className="social-icons">
      <LinkSosmed></LinkSosmed>
    </div>
    <p>Copyrigh ©2020 - Test Brain Color | <a href="http://dinel.netlify.app" target="balnk">Salahuddin</a></p>
  </div>
);

export default footer;
