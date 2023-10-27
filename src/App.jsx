import "./app.css";
import { AnimeData } from "./animeData";
import { useEffect, useState } from "react";

function App() {
  const [animeName, setAnimeName] = useState("");
  const [animeData, setAnimeData] = useState(null);
  
  const fetchData = async () => {
    const url = `https://myanimelist.p.rapidapi.com/anime/search/${animeName}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_X_RAPIDAPI_HOST,
      },
    };
  
    try {
      // Check if you are within the rate limit before making a request
      const currentTime = new Date().getTime();
      if (!localStorage.getItem('lastRequestTime') || currentTime - localStorage.getItem('lastRequestTime') >= 3600000) {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
  
        // Update the last request time
        localStorage.setItem('lastRequestTime', currentTime);
      } else {
        console.log('Rate limit exceeded. Wait for the next hour to make another request.');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchData();
  
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
