import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../store/favoritesContext";

export const CharacterCards = () => {
  const [characters, setCharacters] = useState([]);
  const { addFavorite } = useFavorites();

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
              type: 'character',
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
      <div className="d-flex overflow-auto" style={{paddingTop: '2rem'}}>
        {characters.map((char) => (
          <div className="card me-3" style={{ width: "18rem" }} key={char.id}>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${char.id}.jpg`}
              className="card-img-top"
              alt={char.name}
            />
            <div className="card-body" style={{ color: "black" }}>
              <h5 className="card-title">{char.name}</h5>
              <p className="card-text">
                Birth Year: {char.birthYear}<br />
                Eye Color: {char.eyeColor}<br />
                Gender: {char.gender}<br />
              </p>
              <Link to={`/characters/${char.id}`} className="btn btn-primary">
                Learn more
              </Link>
              <button
                className="btn btn-warning ms-2"
                onClick={() => addFavorite(char)}>
                <i className="fas fa-star"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterCards;


