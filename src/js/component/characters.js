import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CharacterCards = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((response) => response.json())
      .then((data) => {
        const characterPromises = data.results.map((character) =>
          fetch(`https://www.swapi.tech/api/people/${character.uid}`)
            .then((response) => response.json())
            .then((details) => ({
              id: character.uid,
              name: character.name,
              birthYear: details.result.properties.birth_year,
              eyeColor: details.result.properties.eye_color,
              gender: details.result.properties.gender,
            }))
        );
        Promise.all(characterPromises).then((fetchedCharacters) => {
          setCharacters(fetchedCharacters);
        });
      })
      .catch((error) => console.error("Error fetching characters:", error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {characters.map((char) => (
          <div className="col-md-4 mb-4" key={char.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${char.id}.jpg`}
                className="card-img-top"
                alt={char.name}
              />
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <p className="card-text">Birth Year: {char.birthYear}</p>
                <p className="card-text">Eye Color: {char.eyeColor}</p>
                <p className="card-text">Gender: {char.gender}</p>
                <Link to={`/characters/${char.id}`} className="btn btn-primary">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterCards;
