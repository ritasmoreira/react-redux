import React from "react";
import { Link } from "react-router-dom";

const Char = (props) => {
  const character = props.character;

  if (props && character !== undefined) {
    const { name, species, image, id, episode } = character;

    return (
      <div className='column'>
        <div className='ui fluid card'>
          <div className='image'>
            <img src={image} alt={name} />
          </div>
          <div className='content'>
            <Link
              to={{
                pathname: `/results/${id}`,
                state: { name: name, episodeUrl: episode, species: species },
              }}
            >
              <div className='header'>{name}</div>
              <div className='meta'>{species}</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Char;
