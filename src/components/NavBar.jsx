
function NavBar ({pokemonList, handleClickImg}) {

    // const switchPokemon = (PokemonCard) => {
    //     setpokemonIndex(PokemonCard.filter((item) => item !== PokemonCard));
    //   };

    return (
        <>
            {pokemonList.map((pokemon, index) => <button type="button" onClick={()=>handleClickImg(index)} key={pokemon.name}> {pokemon.name} </button>)}
        



        </>
    )
    
}

export default NavBar

{/* {(pokemonIndex > 0) && <button type="button"onClick={handleClickBack}>précédent</button>}
        {(pokemonIndex < pokemonList.length - 1) && <button type="button"onClick={handleClickNext}>suivant</button>} */}

        {/* // {pokemonList.map((pokemon) => <button type="button">{pokemon.name}</button>)}  */}

        // {pokemonList.map((pokemon) => (<button key={pokemon.name} onClick={() => removeArticle(article)}>{pokemon.name}</button>