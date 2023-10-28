import "./app.css";
import { AnimeData } from "./animeData";
import { useEffect, useState } from "react";

function App() {
  const [animeName, setAnimeName] = useState("");
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://kitsu.io/api/edge/anime?filter[text]=${animeName}`;
        const response = await fetch(url);
        const data = await response.json();
        setAnimeData(data); // Update animeData state with fetched data
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

      fetchData();
  }, [animeName]);

  return (
    <div className="main">
      <h1>Anime Search App</h1>
      <form>
        <div className="data-inputs">
          <input
            type="text"
            placeholder="Search for anime..."
            value={animeName}
            onChange={(e) => {
              setAnimeName(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      <AnimeData />
    </div>
  );
}

export default App;