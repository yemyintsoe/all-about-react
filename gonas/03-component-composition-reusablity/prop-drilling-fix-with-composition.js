/* This is prop drilling */
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <div>
      <NavBar movies={movies} />
      ...
    </div>
  );
}
const NavBar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      ...
      <NumResults movies={movies} />
    </nav>
  );
};
const NumResults = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

/*
# Description
To be able to use {movies} state in {NumResults} component, {movies} must be passed two times because NumResults in nested child of the {App} component.

# Solution
To solve this problem we can use "Component Composition", known as "slot" or "children props"
*/

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <div>
      <NavBar>
        ...
        <NumResults movies={movies} />
      </NavBar>
      ...
    </div>
  );
}
const NavBar = ({ children }) => {
  return (
    <nav className="nav-bar">
      ...
      {children}
    </nav>
  );
};
const NumResults = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

/*
See!, we have to pass {movies} state just one time directly from {App} component.
*/

