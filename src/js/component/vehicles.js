import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const VehicleCards = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch('https://www.swapi.tech/api/vehicles/')
            .then((response) => response.json())
            .then((data) => setVehicles(data.results))
            .catch((error) => console.error('Error fetching vehicles:', error));
    }, []);

    return (
        <div className="container">
            <div className="row">
                {vehicles.map((vehicle) => (
                    <div className="col-md-4 mb-4" key={vehicle.uid}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                                className="card-img-top"
                                alt={vehicle.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-primary">
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

export default VehicleCards;



