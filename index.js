var render = (root) => {
  root.empty();
  var wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root))); //Header(update) var update = function() { render(root); }
  wrapper.append(Search(_ => render(root)));

  root.append(wrapper);
/*
  if (state.selectedPokemon != null) {
    getJSON('http://pokeapi.co/api/v2/pokemon-species/' + state.selectedPokemon, (err, json) => {
      if (err) { return alert(err.message);}
      state.pokeSpecies = json;
      state.pokeName = state.pokeSpecies.name;
      state.description = state.pokeSpecies.flavor_text_entries[3].flavor_text;
      var root = $('#root');
      render(root);
    });

    getJSON('http://pokeapi.co/api/v2/pokemon/' + state.selectedPokemon, (err, json) => {
      if (err) { return alert(err.message);}
      state.pokeData = json;
      state.abilities = state.pokeData.abilities;
      state.height = state.pokeData.height + ' m';
      state.weight = state.pokeData.weight + ' kg';
      state.types = state.pokeData.types;
      var root = $('#root');
      render(root);
    });
  }
  */
}

var state = {
  pokemons: null,
  selectedPokemon: null,
  pokeSpecies: null,
  pokeData: null,
  pokeName: null,
  description: null,
  height: null,
  weight: null,
  sex: null,
  category: null,
  abilities: null,
  types: null,
  debility: null
};

$( _ => {
  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {
    if (err) { return alert(err.message);}
    state.pokemons = json;
    var root = $('#root');
    render(root);
  });
});
