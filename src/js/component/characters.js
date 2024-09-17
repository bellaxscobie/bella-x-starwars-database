import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Hair Color:</strong> {character.hair_color}
        </p>
        <p className="card-text">
          <strong>Eye Color:</strong> {character.eye_color}
        </p>
        <p className="card-text">
          <strong>Gender:</strong> {character.gender}
        </p>
      </div>
    </div>
  );
};

const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((character) => (
        <div className="col-md-4" key={character.uid}>
          <CharacterCard character={character} />
        </div>
      ))}
    </div>
  );
};

export default Characters;
