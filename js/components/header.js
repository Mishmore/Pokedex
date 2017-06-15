$(document).ready(function(){
  $('.modal').modal();
});

'use strict';

const Header = () => {
  const header = $('<header>').addClass('container');
  const row = $('<div>').addClass('row');
  const col = $('<div>').addClass('col s12 m12');
  const title = $('<h2>').text('Pokeapi');

  const openModal = $('<a>').attr('href', '#modal1').text('ghg');
  header.append(row);
  row.append(col);
  col.append(title);
  col.append(openModal);

  return header;
}

const Grid = (update) => {
  const modal = $('<div>').addClass('modal').attr('id', 'modal1');
  const modalCont = $('<div>').addClass('modal-content');
  const title = $('<h4>');
  const description = $('p');

  modal.append(modalCont);
  modalCont.append(title);
  modalCont.append(description);

  return modal;

}

const Modal = () => {

}
