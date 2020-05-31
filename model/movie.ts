interface IMovie {
  id: string;
  name: string;
  year: string;
}

let movies: IMovie[] = [{
  id: "1",
  name: "The Shawshank Redemption",
  year: "1994",
}, {
  id: "2",
  name: "Titanic",
  year: "1997",
}, {
  id: "3",
  name: "The Prestige",
  year: "2006",
}];

const getMovies = (): IMovie[] => {
  return movies;
};

const getMovie = (id: string): IMovie | undefined => {
  return movies.find((m) => m.id === id);
};

const addMovie = (name: string, year: string): void => {
  const id: string = (Number(movies[movies.length - 1].id) + 1).toString();
  const movie: IMovie = {
    id,
    name,
    year,
  };
  movies.push(movie);
  return;
};

const updateMovie = (inputMovie: IMovie): IMovie | undefined => {
  const movie: IMovie | undefined = movies.find((m) => m.id === inputMovie.id);
  if (!movie) return;

  movie.name = inputMovie.name;
  movie.year = inputMovie.year;
};

const deleteMovie = (id: string): IMovie | undefined => {
  const index: number = movies.findIndex((m) => m.id === id);
  if (index === -1) return;

  const movie: IMovie = movies[index];
  movies.splice(index, 1);
  return movie;
};

export { getMovies, getMovie, addMovie, updateMovie, deleteMovie };
