import Hero from "@/components/hero";
import DisplayMovies from "@/components/movies";
import data from "@/data/movies.json";


export default function Home() {

  const movies = data.items;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <Hero />
        <DisplayMovies movies={movies} />
      </main>
    </div>
  );
}
