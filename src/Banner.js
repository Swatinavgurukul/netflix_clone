import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css'
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie,setMovie] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request.data.results.length )
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)]
            );
            return request;
            
        }
        fetchData();
    },[]);

    console.log(movie,"soni")
    function truncate(str,n) {
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(${baseUrl}${movie?.backdrop_path})`,
            backgroundPosition:"center center"
        }}>
            <div className="banner_contents">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner_buttons">
                    <button className="banner_button">play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="banner--fadeBottom" />
            {/* Background img */}
            {/* title */}
            {/* div > 2 btn */}
            {/* description */}
        </header>
    )
}
export default Banner;