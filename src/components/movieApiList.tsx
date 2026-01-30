import { IMovieApi } from "@/models/IMovieApi";



export default function DisplayMoviesFromApi({ movies }: { movies: IMovieApi[] }) {
    return (
        <section className="container mx-auto">
            <h2>Batman-filmer</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {movies.map((movie) => (
                    <div key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <span>{movie.Year}</span>
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                )
                )}
            </ul>
        </section>
    )
}