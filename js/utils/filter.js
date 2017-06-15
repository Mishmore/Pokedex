var filterByName = (pokemons,query) => {
  return pokemons.filter((e) => {
    if (e.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
      return e;
    }
  });
}
