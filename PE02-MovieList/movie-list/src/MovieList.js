import { useState } from "react";

function MovieList() {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const movies = [ { 
    title: "Project Hail Mary", 
    genre: "Science Fiction", 
    releaseYear: 2026 
    },

    { 
        title: "Sinners", 
        genre: "Horror", 
        releaseYear: 2025 
    },


    { 
        title: "Interstellar", 
        genre: "Science Fiction", 
        releaseYear: 2014 
    },

    { 
        title: "One Piece: Film Red", 
        genre: "Anime", 
        releaseYear: 2022 
    }
  ];

  const genres = ["All Genres", ...new Set(movies.map(m => m.genre))];


  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter(movie => movie.genre === selectedGenre);

  
  const handleClick = (title) => {
    alert(title);
  };

  return (
    <div style={{ padding: "20px" }}>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px" }}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <div>
        {filteredMovies.map((movie) => (
          <div
            key={movie.title}
            onClick={() => handleClick(movie.title)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "12px",
              marginBottom: "10px",
              cursor: "pointer"
            }}
          >
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;