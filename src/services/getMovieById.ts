import { ISingleMovie } from "@/models/ISingleMovie";

const idURL: string = "http://www.omdbapi.com/?i=tt0040498&plot=full&apikey=b22e9656";

export default async function getMovieById(): Promise<ISingleMovie> {
    try {
        const response = await fetch(idURL);
        if (!response.ok) {
            throw new Error("Det gick inte");
        }
        const data: ISingleMovie = await response.json();
        return data;

    } catch (error) {
        console.log("Detta blev fel: ", error);
    }
    
}