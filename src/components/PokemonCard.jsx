

function PokemonCard() {
    const pokemon = pokemonList[0];
    
    return (
      <>
        <figure>
            <img 
            src={pokemon === pokemonList[0] ? pokemon.imgSrc : null} 
            alt="Bulbasaur" 
            />
            <figcaption>{pokemon === pokemonList[0] ? pokemon.name : <p>???</p>}</figcaption>
            
        </figure>
        
      </>
      
    )
  }

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
  export default PokemonCard