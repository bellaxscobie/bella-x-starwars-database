import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PlanetDetails = () => {
  const { uid } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${uid}`)
      .then((response) => response.json())
      .then((data) => {
        setPlanet(data.result.properties);
      })
      .catch((error) => console.error("Error fetching planet details:", error));
  }, [uid]);

  if (!planet) return <div>In a galaxy far far away...</div>;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 mb-4">
          <div className="card" style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
              className="card-img-top"
              alt={planet.name}
              style={{ width: "50%", objectFit: "cover" }}
            />
            <div className="card-body" style={{ color: "black" }}>
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text">Diameter: {planet.diameter}</p>
              <p className="card-text">Climate: {planet.climate}</p>
              <p className="card-text">Gravity: {planet.gravity}</p>
              <p className="card-text">Terrain: {planet.terrain}</p>
              <p className="card-text">Population: {planet.population}</p>
              <p className="card-text">Surface Water: {planet.surface_water}</p>
              <p className="card-text">Orbital Period: {planet.orbital_period}</p>
              <p className="card-text">Rotation Period: {planet.rotation_period}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;


