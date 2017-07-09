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
      state.sex = state.pokeSpecies.gender_rate;
      state.description = state.pokeSpecies.flavor_text_entries[3].flavor_text;
      console.log(state.pokeName);

      getJSON('http://pokeapi.co/api/v2/pokemon/' + state.selectedPokemon, (err, json) => {
        if (err) { return alert(err.message);}
        state.pokeData = json;
        state.abilities = state.pokeData.abilities;
        state.height = state.pokeData.height + ' m';
        state.weight = state.pokeData.weight + ' kg';
        state.types = state.pokeData.types;
        console.log('got selected pokemon');

        state.types.forEach(function(e) {
          let url = e.type.url;
          getJSON(url, (err, json) => {
            if (err) { return alert(err.message);}
            state.debility = json;
            state.debility.damage_relations.double_damage_from.forEach(function(e) {
              state.doubleDamage.push(e.name);
            });
            state.debility.damage_relations.half_damage_from.forEach(function(e) {
              state.halfDamage.push(e.name);
              console.log('got damage');

              update();

              //update();
            });
          });
        });
      });
    });
  });
  return col;
}