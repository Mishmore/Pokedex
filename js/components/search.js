'use strict';

const Search = (update) => {
  const parent = $('<div>');
  const search = $('<div class="search"></div>');
  const container = $('<div class="container header"></div>');
  const row = $('<div class="row"></div>');
  const formGroup = $('<div class="form-group col s12 col m7 col l7"></div>');
  const icon = $('<i class="fa fa-search col s1" aria-hidden="true"></i>');
  const input = $('<input type="text" class="col s12 col m11">');

  parent.append(search);
  search.append(container);
  container.append(row);
  row.append(formGroup);
  formGroup.append(icon);
  formGroup.append(input);

  input.on("keyup", (e) => {
    let pokemonsFounded = filterByName(state.pokemons.pokemon_entries,input.val())
    reRender(content, pokemonsFounded, update);
  });

  const collection = $('<div class="container grid"></div>');
  const content = $('<div class="row"></div>');
  collection.append(content);

  state.pokemons.pokemon_entries.map((e) => {
    content.append(Pokemon(e, update, e.pokemon_species.name, e.entry_number));

    return content;
  });

  parent.append(collection);
  return parent;

}

const reRender = (content, pokemonsFounded, update) => {
  content.empty();
  pokemonsFounded.forEach((e) => {
    content.append(Pokemon(e,update, e.pokemon_species.name, e.entry_number));
  })
}
