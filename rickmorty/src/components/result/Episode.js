import React from "react";

const Episode = (props) => {
  const { name, air_date, episode } = props.episode;
  return (
    <div className="ui unstackable items">
      <div className="item">
        <div className="content">
          <p className="header">{name}</p>
          <div className="meta">
            <span>{air_date}</span>
          </div>
          <div className="description">
            <p>{episode}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Episode;
