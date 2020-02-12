import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const MovieInfo = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    var url =
      `https://api.themoviedb.org/3/movie/${id}?api_key=64e5e52b0be480556671e1b5f5e825bd&append_to_response=credits&language=en-US`;
    axios
      .get(url)
      .then(res => setMovie(res.data))
      .catch(error => console.log(error));
  }, [])

  console.log("state", movie);
  return <div>hello {id}</div>;
}

export default MovieInfo;