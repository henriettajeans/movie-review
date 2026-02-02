import { IMovieApi, IMovieApiResponse } from "@/models/IMovieApi";


const searchURL = "http://www.omdbapi.com/?s=Batman&page=3&apikey=b22e9656"

export default async function getMovieSearch(): Promise<IMovieApi[]> {
    const response = await fetch(searchURL);

    if (!response.ok) {
        throw new Error("Misslyckades att hämta filmer från OMDB");
    }
    const data: IMovieApiResponse = await response.json();

    console.log(data);
    return data.Search;

}