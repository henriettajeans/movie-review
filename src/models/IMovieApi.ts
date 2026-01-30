export interface IMovieApi {
    Title: string;
    Year: string;       
    imdbID: string;
    Type: string;
    Poster: string;
};

export interface IMovieApiResponse {
    Search: IMovieApi[];
}