'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $('<span id="title">Pokedex</span>');

  header.append(title);
  return header;
}
