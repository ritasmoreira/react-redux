import React from "react";
import Char from "./Char";

const CharList = (props) => {
  let characters;

  if (props.characters === null) {
    characters = "";
  } else {
    characters = props.characters.map((char) => {
      return <Char key={char.id} character={char} />;
    });
  }

  return <div className="ui four column grid">{characters}</div>;
};

export default CharList;
