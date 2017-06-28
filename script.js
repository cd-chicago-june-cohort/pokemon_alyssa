$(document).ready(function(){
    var imgStr='<img src="http://pokeapi.co/media/img/';
    for (var i=1; i<=151; i++){
        imgStr += i + '.png">';
        $('#wrapper').append(imgStr);
        imgStr='<img src="http://pokeapi.co/media/img/';
    }
});