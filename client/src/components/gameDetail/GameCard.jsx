const GameCard = ({ game }) => {
    console.log(game)
  return (
  <div>

        <div>
        {game && (
            <div>
            {/* <img src={game.background_image}/>    */}
            <p><b>Name: </b>{game.name}</p>
            <p><b>⭐ Rating: </b>{game.rating}</p>
            <p><b> 📆Released: </b>{game.released}</p>
            <p><strong>🏹Genres: </strong>{game.genres}</p>
            <p><strong>👾Platforms: </strong>{game.platforms}</p>
              <h3>📖Description: </h3>
            <p dangerouslySetInnerHTML={{ __html: game.description }}/> 
            </div>
        )}
      </div>
</div>
  )
}

export default GameCard;