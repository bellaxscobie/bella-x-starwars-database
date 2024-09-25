import React, { useEffect, useState } from "react";
import CharacterCards from "../component/characters";
import VehicleCards from "../component/vehicles";
import PlanetCards from "../component/planets";

export const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const characterResponse = await fetch("https://swapi.dev/api/people/");
            const characterData = await characterResponse.json();
            setCharacters(characterData.results);

            const vehicleResponse = await fetch("https://swapi.dev/api/vehicles/");
            const vehicleData = await vehicleResponse.json();
            setVehicles(vehicleData.results);

            const planetResponse = await fetch("https://swapi.dev/api/planets/");
            const planetData = await planetResponse.json();
            setPlanets(planetData.results);
        };

        fetchData();
    }, []);

    return (
        <div className="container text-center mt-5">
            <h1>Star Wars Databank</h1>
            <p className="lead">Explore the Star Wars universe. Browse characters, vehicles, and planets.</p>
            <CharacterCards characters={characters} />
            <VehicleCards vehicles={vehicles} />
            <PlanetCards planets={planets} />
        </div>
    );
};


