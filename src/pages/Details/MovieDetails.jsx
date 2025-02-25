import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();

  const movie = movies.find((movie) => movie.id.toString() === id);

  return movie ? (
    <div className="movie-details">
      <img src={movie.poster} alt={movie.title} />
      <div className="textt">
        <h1>{movie.title}</h1>
        <p>{movie.about}</p>
      </div>
    </div>
  ) : (
    <p className="notFound">Movie not found!!!</p>
  );
};

export default MovieDetails;
