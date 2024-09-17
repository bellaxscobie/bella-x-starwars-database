import React, { useState, useEffect } from "react";
import Characters from "../component/characters";

export const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then(response => {
        setCharacters(response.results); 
        console.log('Success:', response);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1>Star Wars Databank</h1>
      <p className="lead">Explore the Star Wars universe. Browse characters, vehicles, and planets.</p>
      <Characters characters={characters} />
    </div>
  );
};
