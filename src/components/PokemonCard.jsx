

function PokemonCard({pokemon}) {
    
    return (
      <>
        <figure>
            <img src={pokemon.imgSrc} alt=""
            />
            <figcaption>{pokemon.name}</figcaption>
          
        </figure>
        
      </>
      
    )
  }

  
  
  export default PokemonCard