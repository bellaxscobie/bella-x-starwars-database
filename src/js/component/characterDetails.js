import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.result.properties);
      })
      .catch((error) => console.error("Error fetching character details:", error));
  }, [id]);

  if (!character) return <div>In a galaxy far far away...</div>;

  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <div className="row justify-content-center">
        <div className="col-md-10 mb-4">
          <div className="card" style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              className="card-img-top"
              alt={character.name}
              style={{ width: "50%", objectFit: "cover" }}
            />
            <div className="card-body" style={{ color: "black" }}>
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">Birth Year: {character.birth_year}</p>
              <p className="card-text">Eye Color: {character.eye_color}</p>
              <p className="card-text">Gender: {character.gender}</p>
              <p className="card-text">Height: {character.height}</p>
              <p className="card-text">Mass: {character.mass}</p>
              <p className="card-text">Hair Color: {character.hair_color}</p>
              <p className="card-text">Skin Color: {character.skin_color}</p>
              <p className="card-text">Homeworld: {character.homeworld}</p>
              <p className="card-text">
                Starships: {character.starships?.length ? character.starships.join(", ") : "None"}
              </p>
              <p className="card-text">
                Vehicles: {character.vehicles?.length ? character.vehicles.join(", ") : "None"}
              </p>
              <button
                className="btn btn-danger"
                onClick={() => navigate(-1)}
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;


