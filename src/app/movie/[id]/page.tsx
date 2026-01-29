import data from "@/data/movies.json";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function singleMovie({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const singleMovie = data.items.find((movie) => movie.id === Number(id))

    if (!singleMovie) {
        return (
            notFound()
        )
    }

    const poster = singleMovie?.poster;

    if (!poster) {
        return (
            <span>Ingen bild</span>
        )
    }

    return (
        <section>
            <div>
                <h3>{singleMovie?.name}</h3>
                {/* TODO: Show minutes as hours */}
                <span>
                    {singleMovie?.durationMinutes} minuter
                </span>
                <h4>
                    {(singleMovie?.genre?.length ?? 0) > 1 ? "Genrer" : "Genre"}
                </h4>
                {singleMovie?.genre.map((genre) =>
                    <span key={genre} className="block">{genre}</span>
                )}

            </div>
            <div>
                <Image src={poster} alt={singleMovie?.name} height={300}
                    width={200} />

            </div>

        </section>
    )
}