import React, { useEffect } from "react";
import movieApi from "../../commen/apis/movieApi";
import { APIKEY } from "../../commen/apis/movieApiKey";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { addMovies } from "../../feature/movies/movieSlice";
const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const moviesResponse = await movieApi
        .get(`?&apiKey=${APIKEY}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err: ", err);
        });

      dispatch(addMovies(moviesResponse.data));
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
