import React from "react";
import "./Home.css";
import { useSearchParams } from "react-router-dom";

const Home = ({ movies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const filteredMovies = category
    ? movies.filter((movie) => movie.category === category)
    : movies;

  const handleCategoryChange = (category) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="home">
      <div className="categoryButtons">
        <button onClick={() => handleCategoryChange("")}>Common</button>
        <button onClick={() => handleCategoryChange("drama")}>Drama</button>
        <button onClick={() => handleCategoryChange("action")}>Action</button>
        <button onClick={() => handleCategoryChange("adventure")}>
          Adventure
        </button>
      </div>

      <div className="lists">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="posterBox">
              <p className="homeText">{movie.title}</p>
              <img src={movie.poster} alt={movie.title} className="poster" />
            </div>
          ))
        ) : (
          <p className="notFound">No movies found in this category...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
