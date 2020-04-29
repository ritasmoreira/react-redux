import React from "react";
import { Link, useLocation } from "react-router-dom";

// Even though I could have just added <Link> to the App component
// I tought making a Header component would be more appropriate
// in case more links were to be added in the future of the application

const Header = () => {
  let location = useLocation();
  return (
    <div className="ui header">
      <h2>Rick and Morty Episode Search</h2>

      {location.pathname.includes("results") ? (
        <Link to="/">Back to Search</Link>
      ) : (
        ""
      )}
      <br />
    </div>
  );
};

export default Header;
