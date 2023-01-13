import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const options = {
    method: "GET",
    url: 'https://anime-db.p.rapidapi.com/anime',
    params: {
      page: '1',
      size: '10',
      search: 'Fullmetal',
      genres: 'Fantasy,Drama',
      sortBy: 'ranking',
      sortOrder: 'asc'
    },
    headers: {
      'X-RapidAPI-Key': '250996e75dmsh7e561e75d237598p1d9adejsnf4a4d2f93a40',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetchMovies();
  });

  const fetchMovies = () => {
    try {
      axios.request(options).then(function (response) {
        // console.log('Data',response.data)
        const allMovies = response.data.data;
        // console.log(allMovies)
        if (response.status === 200) {
          setMovies(allMovies);
        } else {
          setMovies(null);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <div className="movie_list">
          <h4 className="mt-2">Watch Mode</h4>
          <div className="row mt-3">
            <MovieItem movies={movies} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default MovieList;
