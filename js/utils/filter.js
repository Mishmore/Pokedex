var filterByName = (pokemons,query) => {
  return pokemons.filter((e) => {
    if (e.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
      return e;
    }
  });
}
