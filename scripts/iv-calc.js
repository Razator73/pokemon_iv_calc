$( document ).ready(function() {
  var pokemon = $('#pokeList');
  pokemon.empty();
  for (var poke in dexNums) {
    if (dexNums.hasOwnProperty(poke)) {
      pokemon.append('<option value=' + dexNums[poke].species + ' />');
    }
  }
  
  var natures = $('#natList');
  natures.empty();
});
