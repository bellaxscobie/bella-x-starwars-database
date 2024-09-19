import React, { useEffect, useState } from "react";
import CharacterCards from "../component/characters";
import VehicleCards from "../component/vehicles";
import PlanetCards from "../component/planets";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]); 

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error("Error fetching characters:", error));

    fetch("https://swapi.dev/api/vehicles/")
      .then((response) => response.json())
      .then((data) => setVehicles(data.results))
      .catch((error) => console.error("Error fetching vehicles:", error));
  
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => setPlanets(data.results)) 
      .catch((error) => console.error("Error fetching planets:", error));
      
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1>Star Wars Databank</h1>
      <p className="lead">Explore the Star Wars universe. Browse characters, vehicles, and planets.</p>
      <CharacterCards characters={characters} />
      <VehicleCards vehicles={vehicles} />
      <PlanetCards planets={planets}/>
    </div>
  );
};

