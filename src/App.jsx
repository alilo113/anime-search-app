import "./app.css";
import { AnimeData } from "./animeData";
import { useState } from "react";

function App() {
  const [animeName, setAnimeName] = useState('');
  const [animeFetchedData, setAnimeData] = useState(null);

  const fetchData = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const url = `https://kitsu.io/api/edge/anime?filter[text]=${animeName}`;
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.data && data.data.length > 0) {
        console.log('Needed Data:', data.data[0].attributes);
        console.log('Needed Data:', data.data[0].attributes.posterImage.original);
        setAnimeData(data.data[0]); // Setting fetched data in state
      } else {
        console.log('No data found.');
        setAnimeData(null); // Set the state to null if no data is found
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="main">
      <h1>Anime Search App</h1>
      <form onSubmit={fetchData}>
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
      <AnimeData fetchedData={animeFetchedData} />
    </div>
  );
}

export default App;