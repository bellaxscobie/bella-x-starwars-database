import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../store/favoritesContext";

export const Navbar = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-5">
        <Link className="navbar-brand text-white" to="/">
          <img src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest/scale-to-width-down/200?cb=20190313021755" alt="Star Wars" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" id="favoritesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-star"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
                {favorites.length === 0 ? (
                  <li className="dropdown-item text-center">No favorites</li>
                ) : (
                  favorites.map((fav, index) => (
                    <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                      <Link to={`/${fav.type}s/${fav.id}`} className="text-decoration-none">
                        {fav.name}
                      </Link>
                      <button className="btn btn-sm btn-danger ms-2" onClick={() => removeFavorite(fav.id, fav.type)}>
                        x
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

