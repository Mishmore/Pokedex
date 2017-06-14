var render = (root) => {
  root.empty();
  var wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root))); //Header(update) var update = function() { render(root); }
  wrapper.append(Search(_ => render(root)));

  root.append(wrapper);
}

var state = {
  stations: null,
  selectedPokemon: null
};

$( _ => {
  var root = $('#root');
  render(root);
/*
  getJSON('stations.json', (err, json) => {
    if (err) { return alert(err.message);}
    state.stations = json;
    var root = $('.root');
    render(root);
  });
*/
});

/*
$( _ => {
  getMovies((err,data) => {
    if (err) console.log(err);

    console.log(data);
    const root = $("#root");
    render(root,data);
  });
});
*/
