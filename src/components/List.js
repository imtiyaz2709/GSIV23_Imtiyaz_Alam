import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const List = () => {
    const [allMovies, setAllMovies] = useState([])
    const [isSearch, setIsSearching] = useState(false)
    const [keyword, setKeyword] = useState("")


    useEffect(() => {
            if(keyword.length > 0){
              setIsSearching(true)
            } else {
              setIsSearching(false)
            }
            if(isSearch) {
              fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=537fdbde9f7d02aad3f272e252cb5fc2`)
              .then(resp => resp.json())
              .then(resp =>setAllMovies(resp.results))
            } else {
              fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=537fdbde9f7d02aad3f272e252cb5fc2`)
              .then(resp => resp.json())
              .then(resp =>setAllMovies(resp.results))
            }
    },[keyword,isSearch])

  return (
    <>
    <div className="bg-white shadow-lg py-2 px-10 flex justify-between">
        <div
          className="w-4/12 bg-gray-300 flex items-center px-3 rounded-lg"
        >
          <span class="material-symbols-outlined">search</span>
          <input
            type="text"
            value={keyword}
            className="border-0 outline-0 px-2 py-1 w-full bg-transparent"
            placeholder="Search"
            onChange={(e)=> setKeyword(e.target.value)}
          />
        </div>
        <Link to="/" type="button" className="self-center">
          <span class="material-symbols-outlined">home</span>
        </Link>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 px-32 mt-5">
    {
      allMovies.map((value,key)=>(
          <div className="shadow" key={key}>
      <Link to={`/detail/${value.id}`}>
      <img src={`https://www.themoviedb.org/t/p/w300/${value.poster_path}`} alt="" className="w-full" />
      </Link>
      <div className="p-2">
        <div className="flex justify-between">
          <h4 className="font-semibold">{value.original_title}</h4>
          <div className="flex text-slate-600 text-sm">Rating: {value.vote_average}</div>
        </div>
        <p className="line-clamp-2">Description: {value.overview}</p>
      </div>
    </div>
      ))
    }
  </div>
    </>
  );
};

export default List;
