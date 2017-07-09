'use strict';

const ModalContent = () => {
  $('.preloader-wrapper').removeClass('active');

  const modalContent = $('<div class="modal-content container"></div>');
  const row1 = $('<div class="row"></div>');
  const title = $('<h3 class="center-align" id="pokename">'+ state.pokeName +'</h3>');
  const row2 = $('<div class="row"></div>');
  const colLeft = $('<div class="col s5 pokemon"></div>');
  const colRight = $('<div class="col s7"></div>');
  const description = $('<p class="col s12 medium-size-text marg-bot" id="description">'+ state.description +'</p>');
  const datos = $('<div class="col s12 celeste white-text pad-top-bot marg-bot border-radius"></div>');
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

  if (state.pokeSpecies.gender_rate == 1) {
    $('<i class="fa fa-mars" aria-hidden="true"></i>').insertAfter(sexo);
    $('<i class="fa fa-venus" aria-hidden="true"></i>').insertAfter(sexo);
  } else {
    $('<p>Asexual</p>').insertAfter(sexo);
  }

  state.abilities.forEach(function(e) {
    const habilidadData = $('<p>'+ e.ability.name +'</p>');
    col8.append(habilidadData);
  });

  state.types.forEach(function(e) {
    const tipoData = $('<p class="col s4 center-align marg-bot">'+ e.type.name +'</p>');
    tipoData.addClass(e.type.name);
    tipoData.addClass('border-radius');
    tipoDiv.append(tipoData);
  });

  return modalContent;
}
