import "./app.css";
import { AnimeData } from "./animeData";
import { useEffect, useState } from "react";

function App() {
  const [animeName, setAnimeName] = useState("");
  const [animeData, setAnimeData] = useState(null);

  const fetchData = async (name) => {
    const url = 'https://myanimelist.p.rapidapi.com/anime/search/Death%20Note';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '59b28c036bmshd5cfad74e6da3e1p125809jsnf50e58147066',
        'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
      }};
      
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

  fetchData()

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
