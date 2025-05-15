import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { useContext } from "react";
import { LoadContext } from "../contexts/LoadContext";
import { NavLink } from "react-router-dom";

export default function Movies() {

    const { load, setLoad } = useContext(LoadContext);

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const endPoint = ('http://127.0.0.1:3000/movies');

    function getMovies() {
        axios.get(endPoint, {
            params: {
                search
            }
        })
            .then(res => {
                setMovies(res.data);

            })
            .catch(err => console.log(err))
            .finally(setLoad(false));
    };

    useEffect(getMovies, []);

    function searchMovies(event) {
        event.preventDefault();
        getMovies();
    };

    if (load === true) {
        return <div>Caricamento in corso..</div>
    };

    return <div className="bg-dark">
        <h1 className="text-center text-black fw-bold p-3 mb-3">Movies</h1>

        <div className="col-auto container d-flex justify-content-end">
            <NavLink to="/movies/new">
                <button className="btn btn-primary mb-3">
                    Aggiungi un film
                </button>
            </NavLink>
        </div>
        <section className="container">
            <h2 className="text-center">Best movies</h2>

            <form onSubmit={searchMovies} className="row g-1">

                <div className="col-auto">
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Cerca film"
                        value={search} onChange={(e) => setSearch(e.target.value)}
                    />

                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Cerca un film</button>
                </div>

            </form>



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