import React, { useState, useEffect } from 'react';

const PlanetCards = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/planets/')
      .then(response => response.json())
      .then(data => setPlanets(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="card-container">
      <div className="row">
        {planets.map((planet) => (
          <div className="col-md-4 mb-4" key={planet.uid}>
            <div className="card" style={{ width: '18rem' }}>
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                className="card-img-top"
                alt={planet.name} />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">
                  Diameter: {planet.diameter} km<br />
                  Climate: {planet.climate}<br />
                  Terrain: {planet.terrain}
                </p>
                <a href="#" className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetCards;

