'use strict'

const Search = (update) => {
  const parent = $('<div>');
  const search = $('<div class="search"></div>');
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col s12 header-col"></div>');
  const formGroup = $('<div class="form-group z-depth-1 col s12"></div>');
  const icon = $('<i class="fa fa-search col s1" aria-hidden="true"></i>');
  const input = $('<input type="text" class="col s11 col m11" placeholder="Ingresa tu distrito a buscar">');

  parent.append(search);
  search.append(container);
  container.append(row);
  row.append(col);
  col.append(formGroup);
  formGroup.append(icon);
  formGroup.append(input);

  input.on("keyup", (e) => {
    let pokemonsFounded = filterByName(state.pokemons.pokemon_entries,input.val())
    reRender(collection, pokemonsFounded, update);
  });

  const collection = $('<div class="collection"></div>');
  state.pokemons.pokemon_entries.map((e) => {
    collection.append(Pokemon(e, update));
    return collection;
  });

  parent.append(collection);
  return parent;

}

const Pokemon = (e, update) => {
  const container = $('<div>').addClass('container');
  const pokeName = $('<h6>' + e.pokemon_species.name + '</h6>');
  const open = $('<a href="#">open</a>');

  container.append(pokeName);
  container.append(open);

  open.on('click',(event) => {
    event.preventDefault();
    state.selectedPokemon = e.entry_number;
    console.log(e.entry_number);
    update();
  });

  return container;
}

const reRender = (collection, pokemonsFounded, update) => {
  collection.empty();
  pokemonsFounded.forEach((e) => {
    collection.append(Pokemon(e,update));
  })
}
