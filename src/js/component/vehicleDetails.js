import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const VehicleDetails = () => {
    const { uid } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
            .then((response) => response.json())
            .then((data) => setVehicle(data.result.properties))
            .catch((error) => console.error("Error fetching vehicle details:", error));
    }, [uid]);

    if (!vehicle) return <div>In a galaxy far far away...</div>;

    return (
        <div className="container" style={{ paddingTop: "2rem" }}>
            <div className="row justify-content-center">
                <div className="col-md-10 mb-4">
                    <div className="card" style={{ display: "flex", flexDirection: "row" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                            className="card-img-top"
                            alt={vehicle.name}
                            style={{ width: "50%", objectFit: "cover" }}
                        />
                        <div className="card-body" style={{ color: "black" }}>
                            <h5 className="card-title">{vehicle.name}</h5>
                            <p className="card-text">Model: {vehicle.model}</p>
                            <p className="card-text">Manufacturer: {vehicle.manufacturer}</p>
                            <p className="card-text">Cost in Credits: {vehicle.cost_in_credits}</p>
                            <p className="card-text">Length: {vehicle.length}</p>
                            <p className="card-text">Max Speed: {vehicle.max_atmosphering_speed}</p>
                            <p className="card-text">Crew: {vehicle.crew}</p>
                            <p className="card-text">Passengers: {vehicle.passengers}</p>
                            <p className="card-text">Cargo Capacity: {vehicle.cargo_capacity}</p>
                            <p className="card-text">Consumables: {vehicle.consumables}</p>
                            <p className="card-text">Vehicle Class: {vehicle.vehicle_class}</p>
                        </div>
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
    );
};

export default VehicleDetails;




