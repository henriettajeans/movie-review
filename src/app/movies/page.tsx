import { IMovieApi } from "@/models/IMovieApi";
import getMovieSearch from "@/services/getMovieSearch";

export default async function MovieApiPage() {


    const movies: IMovieApi[] = await getMovieSearch();

    if (!movies) {
        console.log("NO MOPVIES")
    }

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <span>{movie.Year}</span>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            ))}
        </div>
    )
}