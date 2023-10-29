import React from 'react';

export function AnimeData({ fetchedData }) {
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
