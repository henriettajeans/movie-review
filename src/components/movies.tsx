import { IMovie } from "@/models/IMovie";
import Image from "next/image";
import Link from "next/link";


export default function DisplayMovies({ movies }: { movies: IMovie[] }) {
    return (
        <section className="container mx-auto">
            <h2>Populära filmer</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {movies.map((movie) =>
                    <Link href={`/movie/${movie.id}`} key={movie.id}>
                        <li className="border rounded p-4">
                            <Image src={movie.poster} width={200} height={300} alt={movie.name} />
                            <h5 className="text-lg font-semibold">
                                {movie.name}
                            </h5>
                            <span className="block text-sm">
                                {movie.genre}
                            </span>
                            <span className="block text-sm">
                                {movie.year}
                            </span>
                            <span className="block text-sm">
                                {movie.durationMinutes} minuter
                            </span>
                            <p className="mt-2 text-sm">{movie.shortDescription}</p>

                        </li>
                    </Link>

                )}
            </ul>
        </section>
    )
}