import React from 'react';
import axios from 'axios';
import Movie from './components/Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.setState({ movies, isLoading: false });

    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // console.log(movies.data.data.movies);
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            '<span class="loaser_text">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              genres={movie.genres}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          ))
        )}
      </section>
    );
  }
}
export default App;
