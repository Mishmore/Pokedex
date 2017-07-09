const Modal = (update) => {
  const modal = $('<div id="modal1" class="modal"></div>');
  const close = $('<a href="#!" class="modal-action modal-close icon close"></a>');

  modal.append(LoadingModal());
  modal.append(close);

  close.on('click', (event) => {
    $('.modal-content').remove();
    $('.preloader-wrapper').addClass('active');
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

  return modal.modal();
}
