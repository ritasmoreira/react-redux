import React from "react";

const RecommendedList = (props) => {
  const { image, name } = props.character;
  return (
    <div>
      <div className="ui middle aligned animated list">
        <div className="item">
          <img className="ui avatar image" alt={name} src={image} />
          <div className="content">
            <div className="header">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedList;
