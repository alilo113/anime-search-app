import "./app.css";
import { AnimeData } from "./animeData";
import { useEffect, useState } from "react";

function App() {
  const [animeName, setAnimeName] = useState("");
  const [animeData, setAnimeData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Make the API request when the form is submitted
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${animeName}`)
      .then((res) => res.json())
      .then((data) => {
        setAnimeData(data); // Update the state with the retrieved data
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="main">
      <h1>Anime Search App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for anime..."
          value={animeName}
          onChange={(e) => setAnimeName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <AnimeData/>
    </div>
  );
}

export default App;