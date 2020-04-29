import React from "react";

const Loader = (props) => {
  return (
    <div className="ui segment">
      <div className="ui active loader">
        <div className="ui medium text loader">{props.text}</div>
      </div>
      <p></p>
      <p></p>
    </div>
  );
};

Loader.defaultProps = {
  text: "Loading",
};

export default Loader;
