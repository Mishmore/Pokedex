'use strict';

const Modal = (update) => {
  const modal = $('<div id="modal1" class="modal"></div>');
  const close = $('<a href="#!" class="modal-action modal-close icon close"></a>');

  modal.append(LoadingModal());
  modal.append(close);

  return modal.modal({
           dismissible: true,
           opacity: .5,
           inDuration: 300,
           outDuration: 200,
           startingTop: '4%',
           endingTop: '10%',
           ready: function(modal, trigger) {},
           complete: function() {
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
            }
         }
       );

}
