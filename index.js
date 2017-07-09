'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
  wrapper.append(Search(_ => render(root)));
  wrapper.append(Modal(_ => render(root)));

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

$( _ => {
  /*
  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {
    if (err) { return alert(err.message);}
    state.pokemons = json;
    const root = $('#root');
    render(root);
  });
*/
//  const loader = $('<div class="progress"><div class="indeterminate"></div></div>');
  //$('body').append(loader);
  $.ajax({
    method: "GET",
    url: "http://pokeapi.co/api/v2/pokedex/1/",
    dataType: "json"
  })
  .done( (response) => {
    state.pokemons = response;
    $('.grid-loading').hide();
    console.log('jquery ok');
    const root = $('#root');
    render(root);
  });

});
