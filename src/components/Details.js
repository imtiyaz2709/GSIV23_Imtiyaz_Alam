import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieid}?api_key=537fdbde9f7d02aad3f272e252cb5fc2`
    )
      .then((resp) => resp.json())
      .then((resp) => setMovie(resp));

    fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=537fdbde9f7d02aad3f272e252cb5fc2`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setCast(resp.cast);
        setDirector(resp.crew.find((value) => value.job === "Director"));
      });
  });

  return (
    <>
      <div className="bg-white shadow-lg py-2 px-10 flex justify-between">
        <div className="flex-1 flex gap-8">
          <Link to="/" type="button" className="self-center">
            <span class="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-bold">Movie Details</h1>
        </div>
        <Link to="/" type="button" className="self-center">
          <span class="material-symbols-outlined">home</span>
        </Link>
      </div>
      <div className="flex px-32 mt-5 gap-5">
        <img
          src={`https://www.themoviedb.org/t/p/w200/${movie.poster_path}`}
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">
            {movie.original_title} ({movie.vote_average})
          </h1>
          <div className="flex gap-2">
            <span>{movie.release_date} |</span>
            <span>{Math.round(movie.runtime / 60)} hours |</span>
            <span>{director.name}</span>
          </div>
          <div className="flex">
            <p className="line-clamp-1">
              <span className="font-bold">Cast:</span>{" "}
              <span className="text-slate-400">
                {cast.map((value, key) => (
                  <span key={key}>{value.name + ", "}</span>
                ))}
              </span>
            </p>
          </div>
          <div className="flex mt-5">
            <p className="font-semibold font-sans">
              Description: {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
