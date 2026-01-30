import Hero from "@/components/hero";
import DisplayMovies from "@/components/movies";
import data from "@/data/movies.json";
import getMovieSearch from "@/services/getMovieSearch";


export default function Home() {


  const movies = data.items;
  return (
    <div >
      <Hero />
      <DisplayMovies movies={movies} />

    </div>
  );
}
