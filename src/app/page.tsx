import Hero from "@/components/hero";
import DisplayMovies from "@/components/movies";
import data from "@/data/movies.json";


export default function Home() {

  const movies = data.items;
  return (
    <div >
      <Hero />
      <DisplayMovies movies={movies} />
    </div>
  );
}
