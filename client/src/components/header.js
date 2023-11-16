import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Payments from "./payments";

const Header = () => {
  const auth = useSelector(({ auth }) => auth);

  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <>
            <li>
              <Payments />
            </li>
            <li style={{ margin: "0 10px" }}>Credits: {auth.credits}</li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </>
        );
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={auth ? "/surveys" : "/"} className="brand-logo">
          Emaily
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
