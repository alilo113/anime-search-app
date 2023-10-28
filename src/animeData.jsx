import React from 'react';

export function AnimeData({ fetchedData }) {
  const animeData = {
    title: "My Hero Academia",
    story: "Born without special powers in a world where 80% of the population has them, Izuku Midoriya still dreams of becoming a hero",
    releaseYear: 2016,
    rating: 8.0,
  };

  return (
    <div>
      {fetchedData && fetchedData.attributes ? (
        <div className='animeData'>
          <div>
            <img src={fetchedData.attributes.posterImage.original} alt="" />
          </div>
          <div>
            <h2>{fetchedData.attributes.titles.en}</h2>
            <p>{fetchedData.attributes.synopsis}</p>
            <p>Release Year: {fetchedData.attributes.startDate}</p>
            <p>Rating: {fetchedData.attributes.averageRating}</p>
            {fetchedData.attributes.slug && <p>Name: {fetchedData.attributes.slug}</p>}
          </div>
        </div>
      ) : (
        <p>Search for anime to be displayed...</p>
      )}
    </div>
  );
}
