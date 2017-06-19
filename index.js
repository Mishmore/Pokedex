'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root))); //Header(update) const update = function() { render(root); }
  wrapper.append(Search(_ => render(root)));

  root.append(wrapper);
}

const state = {
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
  debility: null,
  doubleDamage: [],
  halfDamage: []
};

//'http://pokeapi.co/api/v2/pokedex/1/'
//'pokeapi/all-pokemons.json'
$( _ => {
  getJSON('pokeapi/all-pokemons.json', (err, json) => {
    if (err) { return alert(err.message);}
    state.pokemons = json;
    const root = $('#root');
    render(root);
  });
});
