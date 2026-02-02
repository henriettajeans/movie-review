import { ISingleMovie } from "@/models/ISingleMovie";
import getMovieById from "@/services/getMovieById";

export default async function SingleMovie({ movie }: { movie: ISingleMovie }) {
    try {
        const singleMovie = await getMovieById();
        return (
            <main>
                <h2>{singleMovie.Title}</h2>
                <p>{singleMovie.Plot}</p>

            </main>
        )
    } catch {
        <h4>Det gick inte att ladda filmen</h4>
    }
}