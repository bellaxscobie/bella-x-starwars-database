import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from "../store/favoritesContext";

export const PlanetCards = () => {
  const [planets, setPlanets] = useState([]);
  const { addFavorite } = useFavorites();

  useEffect(() => {
    fetch('https://www.swapi.tech/api/planets/')
      .then(response => response.json())
      .then(data => {
        const planetPromises = data.results.map((planet) =>
          fetch(`https://www.swapi.tech/api/planets/${planet.uid}`)
            .then((response) => response.json())
            .then((details) => ({
              id: planet.uid,
              name: planet.name,
              type: 'planet',
              diameter: details.result.properties.diameter,
              climate: details.result.properties.climate,
              terrain: details.result.properties.terrain,
            }))
        );

        return Promise.all(planetPromises);
      })
      .then((fetchedPlanets) => {
        setPlanets(fetchedPlanets);
      })
      .catch((error) => console.error("Error fetching planets:", error));
  }, []);

  return (
    <div className="card-container">
      <div className="d-flex overflow-auto" style={{paddingTop: '5rem'}}>
        {planets.map((planet) => (
          <div className="card me-3" style={{ width: '18rem' }} key={planet.id}>
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
              className="card-img-top"
              alt={planet.name} />
            <div className="card-body" style={{ color: "black" }}>
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text">
                Diameter: {planet.diameter} km<br />
                Climate: {planet.climate}<br />
                Terrain: {planet.terrain}
              </p>
              {/* Corrected Link path */}
              <Link to={`/planets/${planet.id}`} className="btn btn-primary">
                Learn more
              </Link>
              <button
                className="btn btn-warning ms-2"
                onClick={() => addFavorite(planet)}
              >
                <i className="fas fa-star"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetCards;
