import SingleMovie from "@/components/singleMovie";
import { ISingleMovie } from "@/models/ISingleMovie";
import getMovieById from "@/services/getMovieById";

export default async function SingleMoviePage() {


    const movie: ISingleMovie = await getMovieById();

    if (!movie) {
        console.log("Hittade inte film med det id")
    }

    return (
        <div>
            <h1>Filmer</h1>
            <SingleMovie movie={movie} />
        </div>
    )
}