$(document).ready(function(){
  $('.modal').modal();
});

'use strict';

const Header = () => {
  const header = $('<header>').addClass('container');
  const row = $('<div>').addClass('row');
  const col = $('<div>').addClass('col s12 m12');
  const title = $('<h2>').text('Pokeapi');

  header.append(row);
  row.append(col);
  col.append(title);

  return header;
}
