import myHeroImage from './my-hero-academia-characters-mosaic-i63330.jpg';

export function AnimeData() {
    const animeData = {
      title: "My Hero Academia",
      story: "Born without special powers in a world where 80% of the population has them, Izuku Midoriya still dreams of becoming a hero",
      releaseYear: 2016,
      rating: 8.0,
    };
  
    return (
      <div className="animeData">
        <div>
            <img src={myHeroImage} alt="" />
        </div>
        <div>
            <h2>{animeData.title}</h2>
            <p>{animeData.story}</p>
            <p>Release Year: {animeData.releaseYear}</p>
            <p>Rating: {animeData.rating}</p>
        </div>
        </div>
      );
}