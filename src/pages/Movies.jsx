import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

export default function Movies() {

    const [movies, setMovies] = useState([]);
    const endPoint = ('http://127.0.0.1:3000/movies')

    function getMovies() {
        axios.get(endPoint)
            .then(res => {
                setMovies(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    };

    useEffect(getMovies, []);

    return <div>
        <h1>Movie</h1>
        <section>
            <h2>Best movie</h2>

            <div className="row g-3 container d-flex my-cont">
                {movies.length ? (
                    movies.map((movie) => (
                        <div className="col-12 col-md-4" key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))
                ) : (
                    <div>Nessun film trovato</div>
                )}
            </div>
        </section>
    </div>;

};