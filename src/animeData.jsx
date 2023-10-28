import React from 'react';

export function AnimeData({ fetchedData }) {
  const animeData = {
    title: "My Hero Academia",
    story: "Born without special powers in a world where 80% of the population has them, Izuku Midoriya still dreams of becoming a hero",
    releaseYear: 2016,
    rating: 8.0,
  };

  return (
    <div className="animeData">
      <div>
        {/* Display the fetched data */}
        {fetchedData && fetchedData.attributes ? (
          <div>
            <img src={fetchedData.attributes.posterImage.original} alt="" />
            <h2>{fetchedData.attributes.titles.en}</h2>
            <p>{fetchedData.attributes.synopsis}</p>
            <p>Release Year: {fetchedData.attributes.startDate}</p>
            <p>Rating: {fetchedData.attributes.averageRating}</p>
            {/* Ensure 'slug' property exists before accessing it */}
            {fetchedData.attributes.slug && <p>Name: {fetchedData.attributes.slug}</p>}
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}
