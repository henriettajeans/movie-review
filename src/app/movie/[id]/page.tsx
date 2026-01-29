import data from "@/data/movies.json";
import Image from "next/image";

export default async function singleMovie({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const singleMovie = data.items.find((movie) => movie.id === Number(id))
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


            </div>

        </section>
    )
}