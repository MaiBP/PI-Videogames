import Style from './GameCard.module.css'

const GameCard = ({ game }) => {
    console.log(game)
  return (
  <div>

        <div>
        {game && (
            <div className={Style.container}>
            <div className={Style.containerText}>
            <p><b>Name: </b>{game.name}</p>
            <p><b>⭐ Rating: </b>{game.rating}</p>
            <p><b> 📆Released: </b>{game.released}</p>
            <p><strong>🏹Genres: </strong>{game.genres}</p>
            <p><strong>👾Platforms: </strong>{game.platforms}</p>
            </div> 
            
      <div className={Style.contDescription}>
      <h3 className={Style.titleDescription}>📖Description:</h3>
        <p dangerouslySetInnerHTML={{ __html: game.description }}/> 
            </div>
            </div>
        )}
      </div>
</div>
  )
}

export default GameCard;
