import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from "../store/favoritesContext";

export const VehicleCards = () => {
    const [vehicles, setVehicles] = useState([]);
    const { addFavorite } = useFavorites();

    useEffect(() => {
        fetch('https://www.swapi.tech/api/vehicles/')
            .then((response) => response.json())
            .then((data) => {
                const vehiclePromises = data.results.map((vehicle) =>
                    fetch(`https://www.swapi.tech/api/vehicles/${vehicle.uid}`)
                        .then((response) => response.json())
                        .then((details) => ({
                            id: vehicle.uid,
                            name: vehicle.name,
                            type: 'vehicle',
                            model: details.result.properties.model,
                            max_atmosphering_speed: details.result.properties.max_atmosphering_speed,
                        }))
                );

                return Promise.all(vehiclePromises);
            })
            .then((fetchedVehicles) => {
                setVehicles(fetchedVehicles);
            })
            .catch((error) => console.error("Error fetching vehicles:", error));
    }, []);

    return (
        <div className="container">
            <div className="d-flex overflow-auto" style={{paddingTop: '5rem'}}>
                {vehicles.map((vehicle) => (
                    <div className="card me-3" style={{ width: '18rem' }} key={vehicle.id}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.id}.jpg`}
                            className="card-img-top"
                            alt={vehicle.name}
                        />
                        <div className="card-body" style={{ color: "black" }}>
                            <h5 className="card-title">{vehicle.name}</h5>
                            <p className="card-text">
                                Model: {vehicle.model} <br />
                                Max Speed: {vehicle.max_atmosphering_speed}<br />
                            </p>
                            <Link to={`/vehicles/${vehicle.id}`} className="btn btn-primary">
                                Learn more
                            </Link>
                            <button
                                className="btn btn-warning ms-2"
                                onClick={() => addFavorite(vehicle)}
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

export default VehicleCards;




