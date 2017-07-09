'use strict';

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
  doubleDamage: []
};

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
  wrapper.append(Search(_ => render(root)));
  wrapper.append(Modal(_ => render(root)));

  root.append(wrapper);
}

$( _ => {
  
  const loader = $('<img src="http://25.media.tumblr.com/c99a579db3ae0fc164bf4cca148885d3/tumblr_mjgv8kEuMg1s87n79o1_400.gif" alt="pikachu loader" class="grid-loading">');
  $('body').append(loader);

  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {
    if (err) { return alert(err.message);}
    state.pokemons = json;
    $('.grid-loading').hide();
    const root = $('#root');
    render(root);
  });

});
