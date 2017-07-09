const Modal = (update) => {
  const modal = $('<div id="modal1" class="modal"></div>');
  const modalContent = $('<div class="modal-content container"></div>');
  const row1 = $('<div class="row"></div>');
  const title = $('<h3 class="center-align" id="pokename"></h3>');
  const row2 = $('<div class="row"></div>');
  const colLeft = $('<div class="col s5 pokemon"></div>');
  const colRight = $('<div class="col s7"></div>');
  const description = $('<p class="col s12 medium-size-text marg-bot" id="description">'+ state.description +'</p>');
  const datos = $('<div class="col s12 celeste white-text pad-top-bot marg-bot"></div>');
  const col4 = $('<div class="col s4"></div>');
  const col8 =$('<div class="col s8"></div>');
  const altura = $('<h6>Altura:</h6>');
  const alturaData = $('<p id="height">'+ state.height +'</p>');
  const peso = $('<h6>Peso:</h6>');
  const pesoData = $('<p id="weight">'+ state.weight +'</p>');
  const sexo = $('<h6>Sexo:</h6>');
  const categoria = $('<h6>Categoría:</h6>');
  const categoriaData = $('<p id="category">'+ state.category +'</p>');
  const habilidad = $('<h6>Habilidad:</h6>');
  const tipo = $('<h5 class="col s12 medium-size-text marg-bot">Tipo:</h5>');
  const tipoDiv = $('<div class="col s12 tipos"></div>');
  const debilidad = $('<h5 class="col s12 medium-size-text marg-bot">Debilidad:</h5>');
  const debilidadDiv = $('<div class="col s12 debilidades"></div>');
  const close = $('<a href="#!" class="modal-action modal-close icon close"></a>');

  modal.append(modalContent);
  modalContent.append(LoadingModal());
  modalContent.append(row1);
  row1.append(title);
  modalContent.append(row2);
  row2.append(colLeft);
  //colLeft.append(Pokemon(null, null, state.pokeName, state.selectedPokemon));
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

  close.on('click', (event) => {
    state.selectedPokemon = null;
    state.pokeSpecies = null;
    state.pokeData = null;
    state.pokeName = null;
    state.description = null;
    state.height = null;
    state.weight = null;
    state.sex = null;
    state.category = null;
    state.abilities = null;
    state.types = null;
    state.debility = null;
    state.doubleDamage = [];
    state.halfDamage = [];
  });
  /*
  if (state.pokeSpecies.gender_rate == 1) {
    $('<i class="fa fa-mars" aria-hidden="true"></i>').insertAfter(sexo);
    $('<i class="fa fa-venus" aria-hidden="true"></i>').insertAfter(sexo);
  }
  state.abilities.forEach(function(e) {
    const habilidadData = $('<p>'+ e.ability.name +'</p>');
    col8.append(habilidadData);
  });

  state.types.forEach(function(e) {
    const tipoData = $('<p class="col s4 center-align marg-bot">'+ e.type.name +'</p>');
    tipoData.addClass(e.type.name);
  });
  */
    /*
    */
    /*
    if (e.type.name == "normal") {
      tipoData.addClass('normal white-text');
    }
    else if (e.type.name == "poison") {
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

  state.doubleDamage.forEach(function(e) {
    const debilidad = $('<p class="col s4 center-align marg-bot">'+ e +'</p>');

    if (e == "normal") {
      debilidad.addClass('normal white-text');
    }
    else if (e == "poison") {
      debilidad.addClass('poison white-text');
    }
    else if (e == "bug") {
      debilidad.addClass('bug white-text');
    }
    else if (e == "fire") {
      debilidad.addClass('fire white-text');
    }
    else if (e == "flying") {
      debilidad.addClass('flying white-text');
    }
    else if (e == "electric") {
      debilidad.addClass('electric');
    }
    else if (e == "water") {
      debilidad.addClass('water white-text');
    }
    else if (e == "ground") {
      debilidad.addClass('ground white-text');
    }
    else if (e == "fairy") {
      debilidad.addClass('fairy');
    }
    else if (e == "grass") {
      debilidad.addClass('grass');
    }
    else if (e == "fighting") {
      debilidad.addClass('fighting white-text');
    }
    else if (e == "psychic") {
      debilidad.addClass('psychic white-text');
    }
    else if (e == "rock") {
      debilidad.addClass('rock white-text');
    }
    else if (e == "ice") {
      debilidad.addClass('ice white-text');
    }
    else if (e == "steel") {
      debilidad.addClass('steel white-text');
    }
    else if (e == "ghost") {
      debilidad.addClass('ghost white-text');
    }
    else if (e == "dragon") {
      debilidad.addClass('dragon white-text');
    }
    debilidadDiv.append(debilidad);
  });
  */
  console.log('modal appended');
  return modal.modal();
}
