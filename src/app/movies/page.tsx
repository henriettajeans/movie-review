import DisplayMoviesFromApi from "@/components/movieApiList";
import { IMovieApi } from "@/models/IMovieApi";
import getMovieSearch from "@/services/getMovieSearch";

export default async function MovieApiPage() {


    const movies: IMovieApi[] = await getMovieSearch();

    if (!movies) {
        console.log("NO MOPVIES")
    }

    return (
        <div>
            <h1>Filmer</h1>
            <DisplayMoviesFromApi movies={movies} />
        </div>
    )
}