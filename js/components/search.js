'use strict';

const Header = () => {
  const header = $('<header>').addClass('container');
  const row = $('<div>').addClass('row');
  const col = $('<div>').addClass('col s12 m12');
  const title = $('<h2 class="center-align rojo">Pokédex</h2>');

  header.append(row);
  row.append(col);
  col.append(title);

  return header;
}

const Search = (update) => {
  const parent = $('<div>');
  const search = $('<div class="search"></div>');
  const container = $('<div class="container header"></div>');
  const row = $('<div class="row"></div>');
  const formGroup = $('<div class="form-group col s12 col m7 col l7"></div>');
  const icon = $('<i class="fa fa-search col s1" aria-hidden="true"></i>');
  const input = $('<input type="text" class="col s12 col m11" placeholder="Ingresa tu pokemón a buscar">');

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

const Pokemon = (e, update, name, number) => {
  const col = $('<div class="col s12 m4 l3 xl2 gris-claro gris-text"></div>')
  const pokeName = $('<h6 class="bold center-align">' + name + '</h6>');
  const imgDiv = $('<div class="img-div"></div>');
  const img = $('<img src="http://serebii.net/art/th/' + number + '.png"/>');
  const bottom = $('<div class="trapecio"></div>');
  const icons =$('<div class="icons"></div>');
  const open = $('<a href="#modal1" class="icon pokebola"></a>');
  const data = $('<a href="#" class="icon data"></a>');
  const heart = $('<a href="#" class="icon heart"></a>');

  col.append(imgDiv);
  col.append(bottom);
  imgDiv.append(img);
  bottom.append(icons);
  bottom.append(pokeName);
  icons.append(open);
  icons.append(heart);
  icons.append(data);

  open.on('click',(event) => {
    event.preventDefault();
    state.selectedPokemon = number;

    getJSON('http://pokeapi.co/api/v2/pokemon-species/' + state.selectedPokemon, (err, json) => {
      if (err) { return alert(err.message);}
      state.pokeSpecies = json;
      state.pokeName = state.pokeSpecies.name;
      state.category = state.pokeSpecies.genera[2].genus;
      console.log(state.pokeName);
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
  const modalContent = $('<div class="modal-content container"></div>');
  const row1 = $('<div class="row"></div>');
  const title = $('<h3 class="center-align">'+ state.pokeName +'</h3>');
  const row2 = $('<div class="row"></div>');
  const colLeft = $('<div class="col s5 pokemon"></div>');
  const colRight = $('<div class="col s7"></div>');
  const description = $('<p class="col s12 medium-size-text marg-bot">'+ state.description +'</p>');
  const datos = $('<div class="col s12 celeste white-text pad-top-bot marg-bot"></div>');
  const col4 = $('<div class="col s4"></div>');
  const col8 =$('<div class="col s8"></div>');
  const altura = $('<h6>Altura:</h6>');
  const alturaData = $('<p>'+ state.height +'</p>');
  const peso = $('<h6>Peso:</h6>');
  const pesoData = $('<p>'+ state.weight +'</p>');
  const sexo = $('<h6>Sexo:</h6>');
  const categoria = $('<h6>Categoría:</h6>');
  const categoriaData = $('<p>'+ state.category +'</p>');
  const habilidad = $('<h6>Habilidad:</h6>');
  const tipo = $('<h5 class="col s12 medium-size-text marg-bot">Tipo:</h5>');
  const tipoDiv = $('<div class="col s12 tipos"></div>');
  const debilidad = $('<h5 class="col s12 medium-size-text marg-bot">Debilidad:</h5>');
  const debilidadDiv = $('<div class="col s12 debilidades"></div>');
  const close = $('<a href="#!" class="modal-action modal-close icon close"></a>');

  modal.append(modalContent);
  modalContent.append(row1);
  row1.append(title);
  modalContent.append(row2);
  row2.append(colLeft);
  colLeft.append(Pokemon(null, null, state.pokeName, state.selectedPokemon));
  row2.append(colRight);
  colRight.append(description);
  colRight.append(datos);
  datos.append(col4);
  datos.append(col8);
  col4.append(altura);
  col4.append(alturaData);
  col4.append(peso);
  col4.append(pesoData);
  col4.append(sexo);
  col8.append(categoria);
  col8.append(categoriaData);
  col8.append(habilidad);
  colRight.append(tipo);
  colRight.append(tipoDiv);
  colRight.append(debilidad);
  colRight.append(debilidadDiv);
  modal.append(close);

  state.abilities.forEach(function(e) {
    const habilidadData = $('<p>'+ e.ability.name +'</p>');
    col8.append(habilidadData);
  });

  state.types.forEach(function(e) {
    const tipoData = $('<p class="col s4 center-align marg-bot">'+ e.type.name +'</p>');
    if (e.type.name == "normal") {
      tipoData.addClass('normal white-text');
    }
    if (e.type.name == "poison") {
      tipoData.addClass('poison white-text');
    }
    else if (e.type.name == "bug") {
      tipoData.addClass('bug white-text');
    }
    else if (e.type.name == "fire") {
      tipoData.addClass('fire white-text');
    }
    else if (e.type.name == "flying") {
      tipoData.addClass('flying white-text');
    }
    else if (e.type.name == "electric") {
      tipoData.addClass('electric');
    }
    else if (e.type.name == "water") {
      tipoData.addClass('water white-text');
    }
    else if (e.type.name == "ground") {
      tipoData.addClass('ground white-text');
    }
    else if (e.type.name == "fairy") {
      tipoData.addClass('fairy');
    }
    else if (e.type.name == "grass") {
      tipoData.addClass('grass');
    }
    else if (e.type.name == "fighting") {
      tipoData.addClass('fighting white-text');
    }
    else if (e.type.name == "psychic") {
      tipoData.addClass('psychic white-text');
    }
    else if (e.type.name == "rock") {
      tipoData.addClass('rock white-text');
    }
    else if (e.type.name == "ice") {
      tipoData.addClass('ice white-text');
    }
    else if (e.type.name == "steel") {
      tipoData.addClass('steel white-text');
    }
    else if (e.type.name == "ghost") {
      tipoData.addClass('ghost white-text');
    }
    else if (e.type.name == "dragon") {
      tipoData.addClass('dragon white-text');
    }
    tipoDiv.append(tipoData);
  })


  return modal.modal();
}

const reRender = (content, pokemonsFounded, update) => {
  content.empty();
  pokemonsFounded.forEach((e) => {
    content.append(Pokemon(e,update, e.pokemon_species.name, e.entry_number));
  })
}
