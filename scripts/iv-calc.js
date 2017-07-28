$( document ).ready(function() {
  var pokemon = $('#pokeList');
  pokemon.empty();
  pokemon.append('<option value=' + dexNums.bulbasaur.species + ' />');
  
  var natures = $('#natList');
  natures.empty();
});
