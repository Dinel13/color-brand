import React from "react";
import "./header.css";
import { Link, useLocation, useHistory } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const currentLocation = location.pathname;
  return (
    <div className="headdir">
      <div className="headir_in">
        <div className="logo">
          <h3>
            <Link to="/">
              <span className="fa fa-cogs">Color</span>
              <br />
              <span className="yellow">Brain Test</span>
            </Link>
          </h3>
        </div>
        <div className="triger-nav">
          {currentLocation === "/penjelasan" ? (
            <a onClick={history.goBack}>Kembali</a>
          ) : (
            <Link to="/penjelasan">Tentang Brain Color</Link>
          )}
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Header;
