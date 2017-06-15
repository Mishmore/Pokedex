'use strict';

const Header = () => {
  const header = $('<header>').addClass('container');
  const row = $('<div>').addClass('row');
  const col = $('<div>').addClass('col s12 m12');
  const title = $('<h2 class="text-center">Pokeapi</h2>')

  header.append(row);
  row.append(col);
  col.append(title);

  return header;
}

const Search = (update) => {
  const parent = $('<div>');
  const search = $('<div class="search"></div>');
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col s12 header-col"></div>');
  const formGroup = $('<div class="form-group z-depth-1 col s12"></div>');
  const icon = $('<i class="fa fa-search col s1" aria-hidden="true"></i>');
  const input = $('<input type="text" class="col s11 col m11" placeholder="Ingresa tu pokemón a buscar">');

  parent.append(search);
  search.append(container);
  container.append(row);
  row.append(col);
  col.append(formGroup);
  formGroup.append(icon);
  formGroup.append(input);

  input.on("keyup", (e) => {
    let pokemonsFounded = filterByName(state.pokemons.pokemon_entries,input.val())
    reRender(content, pokemonsFounded, update);
  });

  const collection = $('<div class="container"></div>');
  const content = $('<div class="row"></div>');
  collection.append(content);

  state.pokemons.pokemon_entries.map((e) => {
    content.append(Pokemon(e, update));

    return content;
  });

  parent.append(collection);
  return parent;

}

const Pokemon = (e, update) => {
  const col = $('<div class="col s12 m3"></div>')
  const pokeName = $('<h6>' + e.pokemon_species.name + '</h6>');
  const img = $('<img src="http://serebii.net/art/th/' + e.entry_number + '.png"/>');
  const open = $('<a href="#modal1">open</a>');
/*
  const modal = $('<div id="modal1" class="modal"></div>');
  const modalContent = $('<div class="modal-content"></div>');
  const title = $('<h6>Holi</h6>');
  const close = $('<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>');
  modal.append(modalContent);
  modalContent.append(title);
  modalContent.append(close);
  modal.modal();

  col.append(modal);
*/
  col.append(pokeName);
  col.append(img);
  col.append(open);

  open.on('click',(event) => {
    event.preventDefault();
    state.selectedPokemon = e.entry_number;

    getJSON('http://pokeapi.co/api/v2/pokemon-species/' + state.selectedPokemon, (err, json) => {
      if (err) { return alert(err.message);}
      state.pokeSpecies = json;
      state.pokeName = state.pokeSpecies.name;
      state.description = state.pokeSpecies.flavor_text_entries[3].flavor_text;
    });

    getJSON('http://pokeapi.co/api/v2/pokemon/' + state.selectedPokemon, (err, json) => {
      if (err) { return alert(err.message);}
      state.pokeData = json;
      state.abilities = state.pokeData.abilities;
      state.height = state.pokeData.height + ' m';
      state.weight = state.pokeData.weight + ' kg';
      state.types = state.pokeData.types;
    });


    col.append(Modal());
    //update();

  });


  return col;
}

const Modal = (update) => {
  const modal = $('<div id="modal1" class="modal"></div>');
  const modalContent = $('<div class="modal-content"></div>');
  const title = $('<h6>Holi</h6>');
  const close = $('<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>');

  modal.append(modalContent);
  modalContent.append(title);
  modalContent.append(close);

  return modal.modal();
}

const reRender = (content, pokemonsFounded, update) => {
  content.empty();
  pokemonsFounded.forEach((e) => {
    content.append(Pokemon(e,update));
  })
}
